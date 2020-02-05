package com.ankush.zetaoverflow.repository;

import com.ankush.zetaoverflow.model.AnswerVote;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface AnswerVoteRepository extends CrudRepository<AnswerVote, UUID> {
    public AnswerVote findByAnswerIdAndUserId(UUID answerId, UUID userId);
    public List<AnswerVote> findAllByAnswerId(UUID answerId);

    @Query(value = "select sum(value) from answer_vote where answer_id = :searchTag", nativeQuery = true)
    public long findVoteValue(@Param("searchTag") UUID searchTag);
}
