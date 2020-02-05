package com.ankush.zetaoverflow.repository;

import com.ankush.zetaoverflow.model.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.UUID;

public interface AnswerRepository extends CrudRepository<Answer, UUID>, PagingAndSortingRepository<Answer, UUID> {
    public List<Answer> findByQuestionId(UUID questionId);

    public Page<Answer> findByQuestionId(UUID questionId, Pageable paging);

    public List<Answer> findAllByUserId(UUID userId);
}
