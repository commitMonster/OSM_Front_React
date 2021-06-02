import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import EventBannerCard from "../../../commons/admin/banner/EventBannerCard";
import EventBannerToolbar from "../../../commons/admin/banner/EventBannerToolbar";
import eventbanners from "../../../datas/eventbanners";

const AdminBanner = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <EventBannerToolbar />
        <Box sx={{ pt: 3 }}>
          {eventbanners.map((data) => (
            <EventBannerCard banner={data} />
          ))}
        </Box>
      </Container>
    </Box>
  </>
);

export default AdminBanner;
