package com.ankush.zetaoverflow.controller;

import com.ankush.zetaoverflow.model.Answer;
import com.ankush.zetaoverflow.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping("/questions/{questionId}/answers")
    public List<Answer> getAllAnswers(@PathVariable UUID questionId) {
        return answerService.getAllAnswers(questionId);
    }

    @GetMapping("/questions/{questionId}/answers/page/{pageNo}")
    public Page<Answer> getAllAnswers(@PathVariable UUID questionId, @PathVariable int pageNo, @RequestParam("sortBy") String sortBy) {
        return answerService.getAllAnswers(questionId, pageNo, 5, sortBy);
    }

    @GetMapping("/questions/{questionId}/answers/{id}")
    public Answer getAnswer(@PathVariable UUID questionId, @PathVariable UUID id) {
        return answerService.getAnswer(id);
    }

    @PostMapping("/questions/{questionId}/answers")
    public Answer addAnswer(@PathVariable UUID questionId, @RequestBody Answer answer) {
        return answerService.addAnswer(questionId, answer);
    }

    @PutMapping("/answers/{id}")
    public Answer updateAnswer(@PathVariable UUID id, @RequestBody Answer answer) {
        return answerService.updateAnswer(answer, id);
    }

    @DeleteMapping("/answers/{id}")
    public String deleteAnswer(@PathVariable UUID id) {
        return answerService.deleteAnswer(id);
    }

    @GetMapping("/answers/count")
    public long getAnswerCount() {
        return answerService.getAnswerCount();
    }

    @GetMapping("/answers/user/{userId}")
    public List<Answer> getAnswersByUser(@PathVariable UUID userId) {
        return answerService.getAnswerByUser(userId);
    }
}
