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
      console.log("오류발생");
      console.log(authError);
      setError("로그인 실패");
    }
    if (auth) {
      console.log("로그인 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 정보 확인
  useEffect(() => {
    if (user) {
      history.push("/");
    }
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.log("localStorage is not working");
    }
  }, [user, history]);

  return <Signin onLogin={handleLogin} error={error} />;
};

export default SigninContainer;