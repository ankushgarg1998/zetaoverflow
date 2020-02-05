package com.ankush.zetaoverflow.repository;

import com.ankush.zetaoverflow.model.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

public interface TagRepository extends CrudRepository<Tag, UUID> {
    public List<Tag> findByQuestionId(UUID questionId);

    @Transactional
    public void deleteAllByQuestionId(UUID questionId);
}
