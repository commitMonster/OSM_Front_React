import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useSelector } from "react-redux";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";

const AddressEdit = ({
  mode,
  setMode,
  onCreateDestination,
  onUpdateDestination,
  currentDestination,
}) => {
  const [destinationName, setDestinationName] = useState(
    (currentDestination && currentDestination.destinationName) || ""
  );
  const [receiver, setReceiver] = useState(
    (currentDestination && currentDestination.receiver) || ""
  );
  const [mainAddress, setMainAddress] = useState(
    (currentDestination && currentDestination.mainAddress) || ""
  );
  const [detailAddress, setDetailAddress] = useState(
    (currentDestination && currentDestination.detailAddress) || ""
  );
  const [zoneNumber, setZoneNumber] = useState(
    (currentDestination && currentDestination.zoneNumber) || ""
  );
  const [phone, setPhone] = useState(
    (currentDestination && currentDestination.phone) || ""
  );
  const [isDefault, setIsDefault] = useState(
    (currentDestination && currentDestination.isDefault) || false
  );

  const [open, setOpen] = useState(false);

  const onComplete = (data) => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.bname !== "") {
      extraAddress += data.bname;
    }
    if (data.buildingName !== "") {
      extraAddress +=
        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    console.log(fullAddress);
    setMainAddress(fullAddress);
    setZoneNumber(data.zonecode);
    setOpen(false);
  };

  const onSubmit = () => {
    const body = {
      destinationName,
      receiver,
      mainAddress,
      detailAddress,
      zoneNumber,
      phone,
      isDefault,
    };
    if (mode === "create") {
      console.log(mode);
      onCreateDestination(body);
      setMode("list");
    } else {
      console.log(mode);
      onUpdateDestination({ ...body, id: currentDestination.id });
      setMode("list");
    }
  };

  return (
    <Grid container p={2}>
      <CustomModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DaumPostcode
          style={{
            display: "block",
            width: "400px",
            height: "500px",
          }}
          onComplete={onComplete}
        />
      </CustomModal>
      <Grid item xs={12} p={1} sx={{ backgroundColor: "#338C1B" }}>
        <Typography sx={{ color: "white" }}>배송지 등록</Typography>
      </Grid>
      <Grid item container xs={12} p={1} sx={{ border: "1px solid #338C1B" }}>
        <Grid item xs={6} p={1}>
          <TextField
            required
            label="배송지 이름"
            value={destinationName}
            onChange={(e) => setDestinationName(e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} p={1}>
          <TextField
            required
            label="수령인"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} p={1}>
          <CustomButton
            fullWidth
            varient="outlined"
            onClick={() => {
              setOpen(true);
            }}
          >
            주소 검색하기
          </CustomButton>
        </Grid>
        <Grid item xs={12} p={1}>
          <TextField
            required
            label="주소"
            value={mainAddress}
            onChange={(e) => setMainAddress(e.target.value)}
            size="small"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6} p={1}>
          <TextField
            required
            label="상세주소"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} p={1}>
          <TextField
            required
            label="우편번호"
            value={zoneNumber}
            onChange={(e) => setZoneNumber(e.target.value)}
            size="small"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6} p={1}>
          <TextField
            required
            label="연락처"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} p={1}>
          <FormControlLabel
            checked={isDefault}
            control={<Checkbox />}
            onChange={(e) => {
              setIsDefault(e.target.checked);
            }}
            label="기본 배송지"
            sx={{
              flex: 1,
              ".MuiFormControlLabel-label": { fontSize: "0.9rem" },
            }}
          />
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={1} mt={1}>
        <Grid item xs={6}>
          <CustomButton fullWidth onClick={onSubmit}>
            등록
          </CustomButton>
        </Grid>
        <Grid item xs={6}>
          <CustomButton
            onClick={() => {
              setMode("list");
            }}
            fullWidth
          >
            취소
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddressEdit;
