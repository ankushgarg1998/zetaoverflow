package com.ankush.zetaoverflow;

import com.ankush.zetaoverflow.exception.ZetaOverflowErrorCode;
import com.ankush.zetaoverflow.exception.ZetaOverflowException;
import com.ankush.zetaoverflow.repository.UserRepository;
import com.ankush.zetaoverflow.service.PasswordService;
import com.ankush.zetaoverflow.service.UserService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
public class UserServiceTest {

    @MockBean
    UserRepository userRepository;

    @MockBean
    PasswordService passwordService;

    @Test
    public void should_throwException_when_userNotFound() {

        UserService userService = new UserService(passwordService, userRepository);

        when(userRepository.findById(any(UUID.class))).thenReturn(Optional.empty());

        try {
            userService.getUser(UUID.randomUUID());

        } catch (Exception ex) {
            Assert.assertTrue(ex instanceof ZetaOverflowException);
            ZetaOverflowException exception = (ZetaOverflowException)ex;
            Assert.assertTrue(exception.getHadesErrorCode().getErrorCode().equals(ZetaOverflowErrorCode.USER_NOT_FOUND.getErrorCode()));
        }
    }

}
