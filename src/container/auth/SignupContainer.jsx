import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Signup from "../../components/auth/Signup";
import { checkEmail, checkId, signup } from "../../modules/auth";
import { check } from "../../modules/user";

const SignupContainer = (props) => {
  const history = useHistory();
  const { auth, authError, user, idCheck, emailCheck } = useSelector(
    ({ auth, user }) => ({
      auth: auth.auth,
      authError: auth.authError,
      idCheck: auth.idCheck,
      emailCheck: auth.emailCheck,
      user: user.user,
    })
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSignup = ({ userId, name, email, password, passwordConfirm }) => {
    if ([userId, name, email, password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    dispatch(signup({ userId, name, email, password }));
  };

  const onCheckId = (userId) => {
    dispatch(checkId(userId));
  };
  const onCheckEmail = (email) => {
    dispatch(checkEmail(email));
  };

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      setError("회원가입 실패");
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 정보 확인
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <Signup
      onSignup={handleSignup}
      error={error}
      onCheckId={onCheckId}
      onCheckEmail={onCheckEmail}
      idCheck={idCheck}
      emailCheck={emailCheck}
    />
  );
};

export default SignupContainer;
