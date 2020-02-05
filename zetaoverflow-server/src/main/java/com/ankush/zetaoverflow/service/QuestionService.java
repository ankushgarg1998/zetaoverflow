package com.ankush.zetaoverflow.service;

import com.ankush.zetaoverflow.model.Question;
import com.ankush.zetaoverflow.repository.QuestionRepository;
import com.ankush.zetaoverflow.security.UserPrincipal;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private QuestionVoteService questionVoteService;

    @Autowired
    private UserService userService;

    private UUID getCurrentUserId() {
        String userId = ((UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserId();
        return UUID.fromString(userId);
    }

    public List<Question> getAllQuestions() {
        List<Question> questions = new ArrayList<>();
        questionRepository.findAll()
                .forEach(questions::add);
        return questions;
    }

    public Page<Question> getAllQuestions(int pageNo, int pageSize, String sortBy) {
        Sort sortOrder;
        if(sortBy == null) {
            sortOrder = Sort.by("createdAt").descending();
        } else if(sortBy.equals("latest")) {
            sortOrder = Sort.by("createdAt").descending();
        } else if(sortBy.equals("oldest")) {
            sortOrder = Sort.by("createdAt").ascending();
        } else if(sortBy.equals("votes")) {
            sortOrder = Sort.by("votes").descending();
        } else  {
            sortOrder = Sort.by("createdAt").descending();
        }
        Pageable paging = PageRequest.of(pageNo, pageSize, sortOrder);
        return questionRepository.findAll(paging);
    }

    public Question getQuestion(UUID id) {
        return questionRepository.findById(id).get();
    }

    public Question addQuestion(Question question) {
        question.setUser(userService.getUser(this.getCurrentUserId()));
        question.setVotes(0);
        question.setCreatedAt(new Date());
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question updatedQuestion, UUID id) {
        Question question = questionRepository.findById(id).get();
        if(question.getUser().getId().equals(this.getCurrentUserId())) {
            question.setTitle(updatedQuestion.getTitle());
            question.setText(updatedQuestion.getText());
            question.setUpdatedAt(new Date());
            return questionRepository.save(question);
        } else {
            return null;
        }
    }

    public String deleteQuestion(UUID id) {
        Question question = questionRepository.findById(id).get();
        if(question.getUser().getId().equals(this.getCurrentUserId())) {
            questionRepository.deleteById(id);
            return "SUCCESS";
        } else {
            return "FAILED: Unauthorized user.";
        }
    }

    public List<Question> getQuestions(@PathVariable String name) {
        return questionRepository.findAllQuestionsByName(name);
    }

    public long getQuestionCount() {
        return questionRepository.count();
    }

    public void refreshVotes(UUID id) {
        Question question = questionRepository.findById(id).get();
        question.setVotes(questionVoteService.getVoteValue(id));
        questionRepository.save(question);
    }

    public List<Question> getQuestionsByUser(UUID userId) {
        return questionRepository.findAllByUserId(userId);
    }

    @PersistenceContext
    private EntityManager em;

    public List<Question> search(String terms) {
        FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(em);
        QueryBuilder queryBuilder = fullTextEntityManager.getSearchFactory()
                .buildQueryBuilder().forEntity(Question.class).get();
        org.apache.lucene.search.Query luceneQuery = queryBuilder
                .keyword()
                .onFields("title", "text")
                .matching(terms)
                .createQuery();
        javax.persistence.Query jpaQuery = fullTextEntityManager.createFullTextQuery(luceneQuery, Question.class);

//        jpaQuery.setMaxResults(limit);
//        jpaQuery.setFirstResult(offset);
        return jpaQuery.getResultList();
    }
}
