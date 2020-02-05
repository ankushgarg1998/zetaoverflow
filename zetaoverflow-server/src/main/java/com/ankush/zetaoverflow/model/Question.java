package com.ankush.zetaoverflow.model;

import org.apache.lucene.analysis.core.LowerCaseFilterFactory;
import org.apache.lucene.analysis.snowball.SnowballPorterFilterFactory;
import org.apache.lucene.analysis.standard.StandardTokenizerFactory;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.search.annotations.*;
import org.hibernate.search.annotations.Index;
import org.hibernate.search.annotations.Parameter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.UUID;

@Entity
@Indexed
@AnalyzerDef(name = "customAnalyzer",
    tokenizer = @TokenizerDef(factory = StandardTokenizerFactory.class),
    filters = {
        @TokenFilterDef(factory = LowerCaseFilterFactory.class),
        @TokenFilterDef(factory = SnowballPorterFilterFactory.class, params = {
                @Parameter(name = "language", value = "English")
        })
    })
public class Question {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @NotBlank
    @Field(index = Index.YES, analyze = Analyze.YES, store = Store.NO)
    @Analyzer(definition = "customAnalyzer")
    private String title;

    @Column(columnDefinition = "text")
    @Field(index = Index.YES, analyze = Analyze.YES, store = Store.NO)
    @Analyzer(definition = "customAnalyzer")
    private String text;

    @ManyToOne(optional = false)
    private User user;

    @Column(nullable = false, updatable = false)
    private Date createdAt;

    private Date updatedAt;

    private long votes;

    public Question() {
    }

    public Question(UUID id) {
        this.id = id;
    }

    public Question(@NotBlank String title, String text) {
        this.title = title;
        this.text = text;
    }

    public Question(UUID id, @NotBlank String title, String text, User user, Date createdAt, Date updatedAt) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.user = user;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Question(UUID id, @NotBlank String title, String text, User user, Date createdAt, Date updatedAt, long votes) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.user = user;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.votes = votes;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getVotes() {
        return votes;
    }

    public void setVotes(long votes) {
        this.votes = votes;
    }
}
