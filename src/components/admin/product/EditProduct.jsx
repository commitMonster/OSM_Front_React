import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditForm from "./EditForm";
import UploadImageForm from "./UploadImageForm";
import Preview from "./Preview";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  main: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["상품 정보 작성", "상품 이미지 등록", "상품 미리보기"];

const EditProduct = ({
  product,
  images,
  onChangeField,
  onPublish,
  uploadImage,
  imgaeLoading,
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 0 && [product.name, product.description].includes("")) {
      alert("모든 정보를 입력해주세요");
      return activeStep;
    }
    if (activeStep === 1 && images.length === 0) {
      alert("최소 한개의 이미지를 등록해주세요");
      return activeStep;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <EditForm product={product} onChangeField={onChangeField} />;
      case 1:
        return (
          <UploadImageForm
            images={images}
            uploadImage={uploadImage}
            imgaeLoading={imgaeLoading}
          />
        );
      case 2:
        return <Preview product={product} images={images} />;
      default:
        throw new Error("Unknown step");
    }
  };

  const history = useHistory();
  return (
    <React.Fragment>
      <Helmet>
        <title>EC Mall 관리페이지 | 상품 등록</title>
      </Helmet>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Paper className={classes.paper} variant="outlined">
          <Typography component="h1" variant="h4" align="center">
            상품 등록
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              onPublish()
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      이전
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "등록하기" : "다음"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default EditProduct;
