import {
  Paper,
  paperClasses,
  TextField,
  Typography,
  Select,
} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Slide } from "react-slideshow-image";

const productModifyWrapper = {};
// const useStyles = makeStyles(() => ({}));
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  wrapper: {
    marginTop: theme.spacing(8),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-Evenly",
  },
  image: {
    flexGrow: 1,
    marginLeft: "20px",
    width: "30vw",
    height: "30vw",
    boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: { marginRight: theme.spacing(2) },
  slectField: {},
}));

const productImages = [
  {
    image: ["", "", ""],
  },
];

const ImageSlide = ({ productImages }) => (
  <Slide easing="ease" transitionDuration="500" indicators={true}>
    {productImages.map((item) => (
      <img
        src={`${item.image[0]}`}
        alt="img"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    ))}
  </Slide>
);

const AdminProductModify = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <div className={classes.wrapper}>
          <Grid item xs={8}>
            <Container maxWidth="xl" sx={{ padding: 3 }}>
              <div style={{ fontSize: "30px" }}>물품 등록 / 수정 창</div>
            </Container>
          </Grid>
          <Button>상품 추가</Button>
          <div
            style={{
              display: "flex",
              marginTop: "20",
            }}
          >
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="normal"
              required
              id="name"
              label="상품명 입력"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="normal"
              required
              id="name"
              label="상품가격 입력"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Select
              className={classes.selectField}
              size="small"
              margin="normal"
              required
              id="name"
              labelId="카테고리"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <form>
              <TextField
                sx={{ height: "40vh" }}
                multiline
                rows="10"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="description"
                label="상품설명"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </form>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                상품등록
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default AdminProductModify;
