package com.ankush.zetaoverflow.controller;

import com.ankush.zetaoverflow.model.QuestionVote;
import com.ankush.zetaoverflow.security.UserPrincipal;
import com.ankush.zetaoverflow.service.QuestionVoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class QuestionVoteController {

    @Autowired
    private QuestionVoteService questionVoteService;

    private UUID getCurrentUserId() {
        String userId = ((UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserId();
        return UUID.fromString(userId);
    }

    @PostMapping("/questions/{questionId}/vote/{val}")
    public String voteQuestion(@PathVariable UUID questionId, @PathVariable int val) {
        this.questionVoteService.voteQuestion(val, questionId, this.getCurrentUserId());
        return "SUCCESS";
    }

    @GetMapping("/questions/{questionId}/vote")
    public List<QuestionVote> getVotes(@PathVariable UUID questionId) {
        return this.questionVoteService.getVotes(questionId);
    }

}
