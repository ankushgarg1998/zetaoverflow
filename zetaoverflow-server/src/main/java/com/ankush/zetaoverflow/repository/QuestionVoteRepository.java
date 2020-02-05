package com.ankush.zetaoverflow.repository;

import com.ankush.zetaoverflow.model.QuestionVote;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface QuestionVoteRepository extends CrudRepository<QuestionVote, UUID> {
    public QuestionVote findByQuestionIdAndUserId(UUID questionId, UUID userId);
    public List<QuestionVote> findAllByQuestionId(UUID questionId);

    @Query(value = "select sum(value) from question_vote where question_id = :searchTag", nativeQuery = true)
    public long findVoteValue(@Param("searchTag") UUID searchTag);
}
