import { Box, Container, Divider, Paper } from "@material-ui/core";
import React from "react";
import {
  DataStyle,
  TextStyle,
  TitleStyle,
} from "../../../lib/styles/AdminStyles";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { DateChange } from "../../../lib/utils/dateChange";

const Preview = ({ banner, images }) => {
  const baseURL = "https://shop.dnatuna.fun/api/";

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "auto",
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <TitleStyle>배너 상세정보 </TitleStyle>
          <Divider />
          <Paper
            sx={{
              width: "100%",
            }}
          >
            <Slide easing="ease" transitionDuration="500" indicators={true}>
              {images.map((data, index) => (
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  src={`${baseURL}${data}`}
                  alt="img"
                />
              ))}
            </Slide>
          </Paper>
          <div style={{ marginBottom: "10px" }}>
            <TextStyle>배너 이름</TextStyle>
            <DataStyle>{banner.title}</DataStyle>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextStyle>배너 설명</TextStyle>
            <DataStyle>{banner.description}</DataStyle>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextStyle>배너 유형</TextStyle>
            <DataStyle>
              {banner.type ? <span>이벤트</span> : <span>공지</span>}
            </DataStyle>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextStyle>시작날짜</TextStyle>
            <DataStyle>{DateChange(banner.startDate)}</DataStyle>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextStyle>종료날짜</TextStyle>
            <DataStyle>{DateChange(banner.endDate)}</DataStyle>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(Preview);
