import { Helmet } from "react-helmet-async";
import { Box, Button, Container, Grid } from "@material-ui/core";
import BannerCard from "./BannerCard";
import { Link } from "react-router-dom";

const BannerListTable = ({ bannerlist, onEdit, onDelete, onActivate }) => {
  return (
    <>
      <Helmet>
        <title>EC Mall 관리페이지 | 공지 / 이벤트 관리</title>
      </Helmet>
      <Grid container xs={12} sx={{ minWidth: 1050 }}>
        <Grid
          item
          container
          sx={{
            m: 2,
            justifyContent: "flex-end",
          }}
        >
          <Button color="primary" variant="contained">
            <Link to="/admin/editBanner">공지/이벤트 추가</Link>
          </Button>
        </Grid>
        <Grid item container xs={12} m={2}>
          {bannerlist.map((data) => (
            <BannerCard
              key={data.id}
              banner={data}
              onDelete={onDelete}
              onEdit={onEdit}
              onActivate={onActivate}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default BannerListTable;
