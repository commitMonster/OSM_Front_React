import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "./CustomButton";

const AddressItem = ({
  destination,
  setMode,
  handleSetDefault,
  ondeleteDestination,
  setCurrentDestination,
  onSelect,
}) => {
  const onEdit = () => {
    setCurrentDestination(destination);
    setMode("edit");
  };
  return (
    <Grid
      item
      container
      xs={12}
      p={1}
      sx={{
        borderRight: "1px solid #338C1B",
        borderLeft: "1px solid #338C1B",
        borderBottom: "1px solid #338C1B",
        cursor: "pointer",
        color: "black",
        "&:hover": {
          backgroundColor: "#F2F2F2",
        },
      }}
      onClick={() => {
        onSelect(destination);
      }}
    >
      <Grid item xs={12} sx={{ fontWeight: "bold" }}>
        {destination.destinationName}
      </Grid>
      <Grid item xs={12}>
        수령인 : {destination.receiver}
      </Grid>
      <Grid item xs={12}>
        주소 : {destination.mainAddress}
      </Grid>
      <Grid item xs={12}>
        상세주소 : {destination.detailAddress}
      </Grid>
      <Grid item xs={12}>
        우편번호 : {destination.zoneNumber}
      </Grid>
      <Grid item xs={12}>
        전화번호 : {destination.phone}
      </Grid>
      <Grid item container xs={12} spacing={1} mt={1}>
        <Grid item xs={3}>
          <CustomButton
            variant="outlined"
            fullWidth
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          >
            수정
          </CustomButton>
        </Grid>
        <Grid item xs={3}>
          <CustomButton
            variant="outlined"
            fullWidth
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              ondeleteDestination(destination.id);
            }}
          >
            삭제
          </CustomButton>
        </Grid>
        {!destination.isDefault && (
          <Grid item xs={6}>
            <CustomButton
              variant="outlined"
              fullWidth
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleSetDefault(destination);
              }}
            >
              기본 배송지로 설정
            </CustomButton>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

const AddressList = ({
  destinations,
  setMode,
  ondeleteDestination,
  handleSetDefault,
  setCurrentDestination,
  onSelect,
}) => {
  const onCreate = () => {
    setCurrentDestination(null);
    setMode("create");
  };
  return (
    <Grid container p={2}>
      <Grid
        item
        container
        xs={12}
        flexDirection="column"
        flexWrap="nowrap"
        sx={{ height: "430px", overflow: "auto" }}
      >
        <Grid
          item
          p={1}
          sx={{
            width: "100%",
            height: "fit-content",
            backgroundColor: "#338C1B",
          }}
        >
          <Typography sx={{ color: "white" }}>기본 배송지</Typography>
        </Grid>
        <Grid item container>
          {destinations.map((destination) => {
            if (destination.isDefault)
              return (
                <AddressItem
                  key={destination.id}
                  destination={destination}
                  handleSetDefault={handleSetDefault}
                  ondeleteDestination={ondeleteDestination}
                  setCurrentDestination={setCurrentDestination}
                  setMode={setMode}
                  onSelect={onSelect}
                />
              );
          })}
        </Grid>
        <Grid
          item
          p={1}
          sx={{
            height: "fit-content",
            width: "100%",
            backgroundColor: "#338C1B",
          }}
        >
          <Typography sx={{ color: "white" }}>배송지 목록</Typography>
        </Grid>
        <Grid item container>
          {destinations.map((destination) => {
            if (!destination.isDefault)
              return (
                <AddressItem
                  key={destination.id}
                  destination={destination}
                  handleSetDefault={handleSetDefault}
                  ondeleteDestination={ondeleteDestination}
                  setCurrentDestination={setCurrentDestination}
                  setMode={setMode}
                  onSelect={onSelect}
                />
              );
          })}
        </Grid>
      </Grid>

      <Grid item mt={2}>
        <CustomButton fullWidth onClick={onCreate}>
          배송지 추가
        </CustomButton>
      </Grid>
    </Grid>
  );
};

export default AddressList;
