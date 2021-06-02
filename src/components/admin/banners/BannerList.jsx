import { Helmet } from "react-helmet-async";
import { Box, Container } from "@material-ui/core";
import BannerCard from "./BannerCard";
import BannerToolbar from "./BannerToolbar";

const BannerList = ({ bannerlist, onDeleteHandler, onActivityHandler }) => {
  console.log(bannerlist);
  return (
    <>
      <Helmet>
        <title>김건훈회장님</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "auto",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <BannerToolbar />
          <Box sx={{ pt: 3 }}>
            {bannerlist.map((data) => (
              <BannerCard
                key={data.id}
                onDeleteHandler={onDeleteHandler}
                banner={data}
                onActivityHandler={onActivityHandler}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BannerList;
