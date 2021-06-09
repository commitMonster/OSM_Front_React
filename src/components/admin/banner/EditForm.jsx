import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

const EditForm = ({ banner, onChangeField, onDataChange, value, setValue }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        공지 / 이벤트 정보를 작성해주세요
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="title"
            name="title"
            label="제목"
            value={banner.title}
            onChange={(e) =>
              onChangeField({
                mode: "banner",
                key: "title",
                value: e.target.value,
              })
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="설명"
            value={banner.description}
            onChange={(e) =>
              onChangeField({
                mode: "banner",
                key: "description",
                value: e.target.value,
              })
            }
            fullWidth
            multiline
            rows={4}
            maxRows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              calendars={2}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                onDataChange(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField
                    label="시작 날짜"
                    sx={{ flex: 1 }}
                    {...startProps.inputProps}
                  />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField
                    label="종료 날짜"
                    sx={{ flex: 1 }}
                    {...endProps.inputProps}
                  />
                </>
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>카테고리</InputLabel>
            <Select
              id="type"
              value={banner.type}
              label="배너 종류"
              onChange={(e) =>
                onChangeField({
                  mode: "banner",
                  key: "type",
                  value: e.target.value,
                })
              }
            >
              <MenuItem value={0}>공지</MenuItem>
              <MenuItem value={1}>이벤트</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(EditForm);
