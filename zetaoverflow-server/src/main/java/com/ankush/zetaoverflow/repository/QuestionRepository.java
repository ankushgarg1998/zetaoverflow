package com.ankush.zetaoverflow.repository;

import com.ankush.zetaoverflow.model.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface QuestionRepository extends CrudRepository<Question, UUID>, PagingAndSortingRepository<Question, UUID> {

    @Query(value = "select * from question where id in (select question_id from tag where name = :searchTag)", nativeQuery = true)
    public List<Question> findAllQuestionsByName(@Param("searchTag") String searchTag);

    public Page<Question> findAll(Pageable paging);

    public List<Question> findAllByUserId(UUID id);
}
