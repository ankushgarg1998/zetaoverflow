package com.ankush.zetaoverflow.controller;

import com.ankush.zetaoverflow.model.Question;
import com.ankush.zetaoverflow.security.UserPrincipal;
import com.ankush.zetaoverflow.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    private UUID getCurrentUserId() {
        String userId = ((UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserId();
        return UUID.fromString(userId);
    }

    @GetMapping("/questions")
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/questions/page/{pageNo}")
    public Page<Question> getAllQuestions(@PathVariable int pageNo, @RequestParam("sortBy") String sortBy) {
        return questionService.getAllQuestions(pageNo, 5, sortBy);
    }

    @GetMapping("/questions/{id}")
    public Question getQuestion(@PathVariable UUID id) {
        return questionService.getQuestion(id);
    }

    @PostMapping("/questions")
    public Question addQuestion(@RequestBody Question question) {
        return questionService.addQuestion(question);
    }

    @PutMapping("/questions/{id}")
    public Question updateQuestion(@PathVariable UUID id, @RequestBody Question question) {
        return questionService.updateQuestion(question, id);
    }

    @DeleteMapping("/questions/{id}")
    public String deleteQuestion(@PathVariable UUID id) {
        return questionService.deleteQuestion(id);
    }

    @GetMapping("/tags/{name}/questions")
    public List<Question> getQuestions(@PathVariable String name) {
        return questionService.getQuestions(name);
    }

    @GetMapping("/questions/count")
    public long getQuestionCount() {
        return questionService.getQuestionCount();
    }

    @GetMapping("/questions/search")
    public List<Question> search(@RequestParam("q") String terms) {
        return questionService.search(terms);
    }

    @GetMapping("/questions/user/{userId}")
    public List<Question> getQuestionsByUser(@PathVariable UUID userId){
        return questionService.getQuestionsByUser(userId);
    }
}
