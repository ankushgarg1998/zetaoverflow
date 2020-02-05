package com.ankush.zetaoverflow.controller;

import com.ankush.zetaoverflow.model.Tag;
import com.ankush.zetaoverflow.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TagController {

    @Autowired
    private TagService tagService;

    @GetMapping("/questions/{questionId}/tags")
    public List<Tag> getTags(@PathVariable UUID questionId) {
        return tagService.getTags(questionId);
    }

    @PostMapping("/questions/{questionId}/tags")
    public void addTags(@PathVariable UUID questionId, @RequestBody List<Tag> tags) {
        tagService.addTags(questionId, tags);
    }
}
