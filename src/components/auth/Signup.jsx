/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useRef } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CustomButton from "../common/CustomButton";

export default function Signup({
  onSignup,
  error,
  onCheckId,
  onCheckEmail,
  idCheck,
  emailCheck,
}) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const userIdRef = useRef();

  const handleSignup = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const userId = userIdRef.current.value;
    const name = firstName + lastName;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    onSignup({ userId, name, email, password, passwordConfirm });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>EC Mall | 회원가입</title>
      </Helmet>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#338c1b" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: "100%", // Fix IE11 issue.
            mt: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={firstNameRef}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputRef={lastNameRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="id"
                label="User Id"
                name="id"
                autoComplete="id"
                inputRef={userIdRef}
                error={idCheck}
                onChange={() => {
                  onCheckId(userIdRef.current.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {idCheck ? (
                <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
                  중복된 ID 입니다
                </Typography>
              ) : (
                <Typography sx={{ color: "blue", fontSize: "0.8rem" }}>
                  사용 가능한 ID입니다
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={emailRef}
                error={emailCheck}
                onChange={() => {
                  onCheckEmail(emailRef.current.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {emailCheck && (
                <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
                  중복된 E-mail 입니다
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={passwordRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="passwordConfirm"
                autoComplete="current-password"
                inputRef={passwordConfirmRef}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: "red", fontSize: "1rem" }}>
                {error}
              </Typography>
            </Grid>
          </Grid>
          <CustomButton
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            onClick={handleSignup}
          >
            회원 가입
          </CustomButton>

          <Grid item container mt={1} justifyContent="flex-end">
            <LinkRoute
              to="/signup"
              css={css`
                font-size: 1rem;
                color: #338c1b;
              `}
            >
              로그인 하기
            </LinkRoute>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
