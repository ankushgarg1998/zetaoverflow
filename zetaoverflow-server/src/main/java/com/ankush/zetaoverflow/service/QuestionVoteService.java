package com.ankush.zetaoverflow.service;

import com.ankush.zetaoverflow.model.QuestionVote;
import com.ankush.zetaoverflow.repository.QuestionVoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuestionVoteService {

    @Autowired
    private QuestionVoteRepository questionVoteRepository;

    @Autowired
    private QuestionService questionService;

    public String voteQuestion(int value, UUID questionId, UUID userId) {
        if(value == -1 || value == 0 || value == 1) {
            QuestionVote questionVote = questionVoteRepository.findByQuestionIdAndUserId(questionId, userId);
            if (questionVote == null) {
                QuestionVote quesVote = new QuestionVote(value, questionService.getQuestion(questionId), userId);
                questionVoteRepository.save(quesVote);
            } else {
                questionVote.setValue(value);
                questionVoteRepository.save(questionVote);
            }
            questionService.refreshVotes(questionId);
            return "SUCCESS";
        } else {
            return "FAILED: Invalid vote value";
        }
    }

    public List<QuestionVote> getVotes(UUID questionId) {
        return questionVoteRepository.findAllByQuestionId(questionId);
    }

    public long getVoteValue(UUID questionId) {
        long voteValue  = this.questionVoteRepository.findVoteValue(questionId);
        return voteValue;
    }
}
