import react, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GetAppIcon from "@material-ui/icons/GetApp";

const BannerCard = ({ banner, onDeleteHandler, onActivityHandler }) => {
  const [activityState, setActivityState] = useState(null);
  const baseURL = "https://shop.dnatuna.fun/api/";
  return (
    <Box
      borderBottom={1}
      sx={{
        display: "flex",
        flexDirection: "Row",
        justifyContent: "space-around",
        minWidth: "10rem",
        height: "100%",
        oxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        m: 1,
      }}
    >
      <Box
        sx={{
          flex: 1,
          justifyContent: "start",
          align: "center",
          p: 3,
          m: 3,
        }}
      >
        <img
          style={{ width: "300px", height: "200px" }}
          alt="Product"
          src={`${baseURL}${banner.image[0]}`}
          variant="square"
        />
      </Box>
      <Link to={`/admin/banner/${banner.id}`}>
        <Box sx={{ flex: 3, p: 5 }}>
          <Typography
            align="start"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {banner.title}
          </Typography>

          <Typography align="start" color="textPrimary" variant="body1">
            {banner.description}
          </Typography>
          {banner.activation ? (
            <Typography style={{ color: "red" }}>활성화 상태</Typography>
          ) : (
            <Typography style={{ color: "blue" }}>비활성화 상태</Typography>
          )}
        </Box>
      </Link>
      <Box sx={{ flex: 1, p: 5, flexDirection: "row", align: "center" }}>
        {/* 수정 구현하기 */}
        <Box sx={{ p: 3 }}>
          <button onClick={() => onDeleteHandler(banner.id)}>삭제</button>
          <span> / </span>
          {/* 삭제 구현하기 */}
          <Link
            to={`/admin/banner/updatebanner/${banner.id}`}
            style={{ marginRight: "20px" }}
          >
            수정
          </Link>
          <button
            onClick={() =>
              onActivityHandler(banner.id, { activation: !banner.activation })
            }
          >
            활성화
          </button>
        </Box>
      </Box>

      {/* <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <GetAppIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {banner.totalDownloads}
            {' '}
            Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box> */}
    </Box>
  );
};

export default BannerCard;
