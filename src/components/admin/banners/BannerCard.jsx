import react, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";
import { DateChange } from "../../../lib/utils/dateChange";

const BannerCard = ({ banner, onEdit, onDelete, onActivate }) => {
  const [activityState, setActivityState] = useState(null);
  const baseURL = "https://shop.dnatuna.fun/api/";

  return (
    <Grid
      item
      container
      xs={12}
      mt={2}
      alignItems="center"
      sx={{
        boxShadow: "5px 5px 10px 1px rgba(125,125,125,0.31)",
      }}
    >
      <Grid item xs={4}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Product"
          src={`${baseURL}${banner.image[0]}`}
          variant="square"
        />
      </Grid>
      <Grid item xs={5} p={2}>
        <Link to={`/admin/banner/${banner.id}`}>
          <Typography
            align="start"
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {banner.title}
          </Typography>

          <Typography align="start" color="textPrimary" variant="body1" mb={2}>
            {banner.description}
          </Typography>
          <Typography
            align="start"
            color="textPrimary"
            variant="body1"
            sx={{ color: "gray" }}
          >
            기간 :{" "}
            {DateChange(banner.startDate) + " ~ " + DateChange(banner.endDate)}
          </Typography>
          {banner.activation ? (
            <Typography style={{ color: "red" }}>활성화 상태</Typography>
          ) : (
            <Typography style={{ color: "blue" }}>비활성화 상태</Typography>
          )}
        </Link>
      </Grid>

      <Grid item container xs={3} justifyContent="center" alignItems="center">
        <Button onClick={() => onEdit(banner)}>수정</Button>
        <span> / </span>
        <Button onClick={() => onDelete(banner.id)}>삭제</Button>
        <span> / </span>
        <Button onClick={() => onActivate(banner.id, !banner.activation)}>
          {banner.activation ? "비활성화" : "활성화"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default BannerCard;
