import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import palette from "../../../lib/styles/palette";

const typeList = [
  {
    id: "",
    title: "전체 보기",
  },
  {
    id: "now",
    title: "진행중인 이벤트",
  },
  {
    id: "end",
    title: "종료된 이벤트",
  },
];

const activeTypo = (type, state, title) => {
  return type === state ? (
    <Typography sx={{ color: palette.blue }}>{title}</Typography>
  ) : (
    <Typography sx={{ color: "inherit" }}>{title}</Typography>
  );
};

const ProductListToolbar = ({ type, sort, onDataChange, onSortChange }) => {
  const [dataError, setDateError] = useState(false);
  const [value, setValue] = useState([null, null]);

  return (
    <Card
      sx={{
        p: 2,
        m: 2,
        minWidth: 1050,
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item container xs={6} sx={{ ".css-wne9d8": { flex: 1 } }}>
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
                    size="small"
                    sx={{ flex: 1 }}
                    {...startProps.inputProps}
                  />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField
                    label="종료 날짜"
                    size="small"
                    sx={{ flex: 1 }}
                    {...endProps.inputProps}
                  />
                </>
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item container xs={6}>
          {typeList.map((item) => (
            <Button
              color="inherit"
              onClick={() => {
                type !== item.id
                  ? onSortChange(item.id, "desc")
                  : sort === "desc"
                  ? onSortChange(item.id, "asc")
                  : onSortChange(item.id, "desc");
              }}
              sx={{
                flex: 1,
              }}
            >
              {activeTypo(type, item.id, item.title)}
              {type === item.id &&
                (sort === "desc" ? (
                  <ArrowDropDownIcon
                    color="inherit"
                    sx={{ color: palette.blue }}
                  />
                ) : (
                  <ArrowDropUpIcon
                    color="inherit"
                    sx={{ color: palette.blue }}
                  />
                ))}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductListToolbar;
