import React, { useState, useCallback, useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Slide } from "react-slideshow-image";
import Paper from "@material-ui/core/Paper";
import "react-slideshow-image/dist/styles.css";
import { updateBannerAction } from "../../../modules/actions/bannerActions";

import {
  TitleStyle,
  InputField,
  TextStyle,
} from "../../../lib/styles/AdminStyles";
import { useSelector, useDispatch } from "react-redux";

function UpdateBanner({ id }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [postStartDate, setPostStartDate] = useState("");
  const [postEndDate, setPostEndDate] = useState("");
  const [images, setImages] = useState([]);
  const baseURL = "https://shop.dnatuna.fun/api/";
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.BannerReducer.bannerdetail
  );

  useEffect(() => {
    if (data) {
      console.log(data);
      setTitle(data.title);
      setType(data.type);
      setDescription(data.description);
      setStartDate(data.startDate.replace(" ", "T"));
      setEndDate(data.endDate.replace(" ", "T"));
      setImages(data.image);
      console.log(images);
    }
  }, [data]);
  const onTitleHandler = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title]
  );
  const onTypeHandler = useCallback(
    (e) => {
      setType(e.target.value);
    },
    [type]
  );
  const onDescriptionHandler = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [description]
  );
  const onStartDate = useCallback(
    (e) => {
      setStartDate(e.target.value);
      console.log(e.target.value);
      setPostStartDate(
        `${e.target.value}:00`.split("T")[0] +
          " " +
          `${e.target.value}:00`.split("T")[1]
      );
    },
    [startDate]
  );
  const onEndDate = useCallback(
    (e) => {
      setEndDate(e.target.value);
      setPostEndDate(
        `${e.target.value}:00`.split("T")[0] +
          " " +
          `${e.target.value}:00`.split("T")[1]
      );
    },
    [startDate]
  );
  const DeleteImage = useCallback(
    (index) => {
      const result = window.confirm("해당 이미지를 삭제하시겠습니까?");
      if (result) {
        const data = images.filter((image, i) => i != index);
        setImages(data);
        console.log(images);
      }
    },
    [images]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title && description && images && startDate && endDate) {
        const dataSubmit = {
          title: title,
          type: type,
          description: description,
          startDate: postStartDate,
          endDate: postEndDate,
          image: images,
        };
        console.log(dataSubmit);
        dispatch(updateBannerAction(id, dataSubmit));
      } else {
        console.log("title:", title, "des", description, "images", images);
        alert("데이터를 입력해야 합니다.");
      }
    },
    [title, description, images, startDate, endDate]
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "auto",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <TitleStyle>배너 수정 </TitleStyle>
            <Divider />
            <div
              style={{ width: "50%", marginBottom: "10px", display: "flex" }}
            >
              <TextField
                style={{ marginRight: "10px", marginTop: "30px" }}
                variant="outlined"
                fullWidth
                id="name"
                label="배너 이름"
                name="name"
                type="text"
                value={title}
                onChange={onTitleHandler}
                autoComplete="배너 이름"
                autoFocus
              />
              <FormControl>
                <InputLabel
                  style={{
                    width: "150px",
                    marginRight: "10px",
                    marginTop: "30px",
                  }}
                  id="demo-simple-select-helper-label"
                >
                  유형 선택
                </InputLabel>
                <Select
                  style={{
                    width: "150px",
                    marginRight: "10px",
                    marginTop: "30px",
                  }}
                  value={type}
                  onChange={onTypeHandler}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={0}>공지</MenuItem>
                  <MenuItem value={1}>이벤트</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                width: "50%",
                marginBottom: "10px",
                display: "flex",
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                id="detail"
                label="배너 상세 설명"
                name="detail"
                type="text"
                autoComplete="count"
                value={description}
                onChange={onDescriptionHandler}
                autoFocus
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                id="datetime-local"
                label="시작 날짜"
                type="datetime-local"
                value={startDate}
                onChange={onStartDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                id="datetime-local"
                label="종료 날짜"
                type="datetime-local"
                value={endDate}
                onChange={onEndDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <InputField
              className="filebox bs3-primary"
              style={{ marginBottom: "20px" }}
            >
              <input
                className="upload-name"
                value="파일선택"
                disabled="disabled"
              />
              <label for="ex_filename">업로드</label>
              <input
                type="file"
                id="ex_filename"
                className="upload-hidden"
                multiple
              />
            </InputField>
            {images ? (
              <Paper
                sx={{
                  width: "50%",
                }}
              >
                <Slide easing="ease" transitionDuration="500" indicators={true}>
                  {images.map((data, index) => {
                    console.log(index);
                    return (
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
                          cursor: "pointer",
                        }}
                        onClick={() => DeleteImage(index)}
                        src={`${baseURL}${data}`}
                        alt="img"
                      ></img>
                    );
                  })}
                </Slide>
              </Paper>
            ) : (
              <></>
            )}
            <button onClick={onSubmit}>배너수정</button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default UpdateBanner;
