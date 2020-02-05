package com.ankush.zetaoverflow.service;

import com.ankush.zetaoverflow.model.Tag;
import com.ankush.zetaoverflow.repository.QuestionRepository;
import com.ankush.zetaoverflow.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public void addTags(UUID questionId, List<Tag> tags) {
        tagRepository.deleteAllByQuestionId(questionId);
//        tagRepository.deleteAll(tagRepository.findByQuestionId(questionId));
        tags.forEach(tag -> tag.setQuestion(questionRepository.findById(questionId).get()));
        tagRepository.saveAll(tags);
    }

    public List<Tag> getTags(UUID questionId) {
        return tagRepository.findByQuestionId(questionId);
    }
}
