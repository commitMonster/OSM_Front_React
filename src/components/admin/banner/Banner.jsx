import React from "react";
import Divider from "@material-ui/core/Divider";
import { Box, Container } from "@material-ui/core";
import {
  TitleStyle,
  TextStyle,
  DataStyle,
} from "../../../lib/styles/AdminStyles";
import { Slide } from "react-slideshow-image";
import Paper from "@material-ui/core/Paper";
import "react-slideshow-image/dist/styles.css";
import { DateChange } from "../../../lib/utils/dateChange";
import { Helmet } from "react-helmet-async";

const Banner = ({ banner }) => {
  const baseURL = "https://shop.dnatuna.fun/api/";
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "auto",
        py: 3,
      }}
    >
      <Helmet>
        <title>EC Mall 관리페이지 | 공지 / 이벤트 관리</title>
      </Helmet>
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
              {banner.image.map((data, index) => (
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
            <TextStyle>활성화 여부</TextStyle>
            <DataStyle>
              {banner.activation ? (
                <span>활성화 상태</span>
              ) : (
                <span>활성화 안됨</span>
              )}
            </DataStyle>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TextStyle>시작날짜</TextStyle>
            <DataStyle>{DateChange(banner.startDate)}</DataStyle>
            <TextStyle>종료날짜</TextStyle>
            <DataStyle>{DateChange(banner.endDate)}</DataStyle>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
