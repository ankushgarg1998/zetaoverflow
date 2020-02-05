package com.ankush.zetaoverflow.controller;

import com.ankush.zetaoverflow.model.AnswerVote;
import com.ankush.zetaoverflow.security.UserPrincipal;
import com.ankush.zetaoverflow.service.AnswerVoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AnswerVoteController {

    @Autowired
    private AnswerVoteService answerVoteService;

    private UUID getCurrentUserId() {
        String userId = ((UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserId();
        return UUID.fromString(userId);
    }

    @PostMapping("/answers/{answerId}/vote/{val}")
    public String voteAnswer(@PathVariable UUID answerId, @PathVariable int val) {
        this.answerVoteService.voteAnswer(val, answerId, this.getCurrentUserId());
        return "SUCCESS";
    }

    @GetMapping("/answers/{answerId}/vote")
    public List<AnswerVote> getVotes(@PathVariable UUID answerId) {
        return this.answerVoteService.getVotes(answerId);
    }

}
