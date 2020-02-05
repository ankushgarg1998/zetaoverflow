package com.ankush.zetaoverflow.exception;

import org.springframework.http.HttpStatus;

//@Getter
//@AllArgsConstructor
public enum ZetaOverflowErrorCode {

    INTERNAL_SERVER_ERROR("ER000", "Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR),

    USER_NOT_FOUND("ER001", "User not found", HttpStatus.NOT_FOUND);

    ZetaOverflowErrorCode(String errorCode, String errorMessage, HttpStatus httpStatus) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.httpStatus = httpStatus;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    private String errorCode;
    private String errorMessage;
    private HttpStatus httpStatus;
}