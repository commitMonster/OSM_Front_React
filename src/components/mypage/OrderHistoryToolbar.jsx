import { Box, Card, Grid, TextField } from "@material-ui/core";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { useState } from "react";

const OrderHistoryToolbar = ({ onDataChange }) => {
  const [dataError, setDateError] = useState(false);
  const [value, setValue] = useState([null, null]);

  return (
    <Card
      sx={{
        p: 2,
        m: 2,
      }}
    >
      <Grid container alignItems="center" spacing={2} justifyContent="center">
        <Grid item container xs={10} sx={{ ".css-wne9d8": { flex: 1 } }}>
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
      </Grid>
    </Card>
  );
};

export default OrderHistoryToolbar;
