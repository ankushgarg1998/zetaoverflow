package com.ankush.zetaoverflow.service;

import com.ankush.zetaoverflow.model.Answer;
import com.ankush.zetaoverflow.model.Question;
import com.ankush.zetaoverflow.repository.AnswerRepository;
import com.ankush.zetaoverflow.repository.QuestionRepository;
import com.ankush.zetaoverflow.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AnswerVoteService answerVoteService;

    private UUID getCurrentUserId() {
        String userId = ((UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserId();
        return UUID.fromString(userId);
    }

    public List<Answer> getAllAnswers(UUID questionId) {
        List<Answer> answers = new ArrayList<>();
        answerRepository.findByQuestionId(questionId)
                .forEach(answers::add);
        return answers;
    }

    public Page<Answer> getAllAnswers(UUID questionId, int pageNo, int pageSize, String sortBy) {
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
        return answerRepository.findByQuestionId(questionId, paging);
    }

    public Answer getAnswer(UUID id) {
        return answerRepository.findById(id).get();
    }

    public Answer addAnswer(UUID questionId, Answer answer) {
        answer.setVotes(0);
        answer.setUser(this.userService.getUser(this.getCurrentUserId()));
        Question question = questionRepository.findById(questionId).get();
        answer.setQuestion(question);
        answer.setCreatedAt(new Date());
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer updatedAnswer, UUID id) {
        Answer answer = answerRepository.findById(id).get();
        if(answer.getUser().getId().equals(this.getCurrentUserId())) {
            answer.setText(updatedAnswer.getText());
            answer.setUpdatedAt(new Date());
            return answerRepository.save(answer);
        } else {
            return null;
        }
    }

    public String deleteAnswer(UUID id) {
        Answer answer = answerRepository.findById(id).get();
        if(answer.getUser().getId().equals(this.getCurrentUserId())) {
            answerRepository.deleteById(id);
            return "SUCCESS";
        } else {
            return "FAILED: Unauthorized user.";
        }
    }

    public long getAnswerCount() {
        return answerRepository.count();
    }

    public void refreshVotes(UUID id) {
        Answer answer = answerRepository.findById(id).get();
        answer.setVotes(answerVoteService.getVoteValue(id));
        answerRepository.save(answer);
    }

    public List<Answer> getAnswerByUser(UUID userId) {
        return answerRepository.findAllByUserId(userId);
    }
}
