package com.ankush.zetaoverflow.exception;

//@Getter
public class ZetaOverflowException extends RuntimeException {

    private ZetaOverflowErrorCode hadesErrorCode;

    public ZetaOverflowErrorCode getHadesErrorCode() {
        return hadesErrorCode;
    }

    public ZetaOverflowException(String message) {
        super(message);
        this.hadesErrorCode = ZetaOverflowErrorCode.INTERNAL_SERVER_ERROR;
    }

    public ZetaOverflowException(String message, Throwable cause) {
        super(message, cause);
        this.hadesErrorCode = ZetaOverflowErrorCode.INTERNAL_SERVER_ERROR;
    }

    public ZetaOverflowException(ZetaOverflowErrorCode errorCode) {
        super(errorCode.getErrorMessage());
        this.hadesErrorCode = errorCode;
    }

    public ZetaOverflowException(String message, Throwable cause, ZetaOverflowErrorCode errorCode) {
        super(message, cause);
        this.hadesErrorCode = errorCode;
    }

    public ZetaOverflowException(Throwable cause, ZetaOverflowErrorCode errorCode) {
        super(cause);
        this.hadesErrorCode = errorCode;
    }

    public ZetaOverflowException(String message, ZetaOverflowErrorCode errorResponseCode) {
        super(message);
        this.hadesErrorCode = errorResponseCode;
    }
}