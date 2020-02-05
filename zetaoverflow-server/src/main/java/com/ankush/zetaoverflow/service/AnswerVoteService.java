package com.ankush.zetaoverflow.service;

import com.ankush.zetaoverflow.model.AnswerVote;
import com.ankush.zetaoverflow.repository.AnswerVoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AnswerVoteService {

    @Autowired
    private AnswerVoteRepository answerVoteRepository;

    @Autowired
    private AnswerService answerService;

    public String voteAnswer(int value, UUID answerId, UUID userId) {
        if(value == -1 || value == 0 || value == 1) {
            AnswerVote answerVote = answerVoteRepository.findByAnswerIdAndUserId(answerId, userId);
            if(answerVote == null) {
                AnswerVote quesVote = new AnswerVote(value, answerService.getAnswer(answerId), userId);
                answerVoteRepository.save(quesVote);
            } else {
                answerVote.setValue(value);
                answerVoteRepository.save(answerVote);
            }
            answerService.refreshVotes(answerId);
            return "SUCCESS";
        } else {
            return "FAILED: Invalid vote value";
        }
    }

    public List<AnswerVote> getVotes(UUID answerId) {
        return answerVoteRepository.findAllByAnswerId(answerId);
    }

    public long getVoteValue(UUID answerId) {
        long voteValue  = this.answerVoteRepository.findVoteValue(answerId);
        return voteValue;
    }
}
