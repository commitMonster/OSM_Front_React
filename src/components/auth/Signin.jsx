/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useRef } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CustomButton from "../common/CustomButton";

export default function Signin({ onLogin, error }) {
  const idRef = useRef();
  const pwdRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const userId = idRef.current.value;
    const password = pwdRef.current.value;
    onLogin({ userId, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>EC Mall | 로그인</title>
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
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: "100%", // Fix IE11 issue.
            mt: 1,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID"
            name="id"
            autoComplete="id"
            autoFocus
            inputRef={idRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={pwdRef}
          />
          <Typography sx={{ color: "red" }} mb={1}>
            {error}
          </Typography>
          <CustomButton
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            onClick={handleLogin}
          >
            로그인
          </CustomButton>

          <Grid item container mt={1} justifyContent="flex-end">
            <LinkRoute
              to="/signup"
              css={css`
                font-size: 1rem;
                color: #338c1b;
              `}
            >
              회원가입 하기
            </LinkRoute>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
