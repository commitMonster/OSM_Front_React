import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Signin from "../../components/auth/Signin";
import { signin } from "../../modules/auth";
import { check } from "../../modules/user";

const SigninContainer = (props) => {
  const history = useHistory();
  const { auth, authError, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = ({ userId, password }) => {
    dispatch(signin({ userId, password }));
  };

  // 로그인 성공/실패 처리
  useEffect(() => {
    if (authError) {
      setError("아이디와 패스워드를 다시 입력해주세요");
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 정보 확인
  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        alert("관리자님 환영합니다!");
        history.push("/admin");
      } else {
        alert(`${user.name}님 안녕하세요!`);
        history.push("/");
      }
    }
  }, [user, history]);

  return <Signin onLogin={handleLogin} error={error} />;
};

export default SigninContainer;
