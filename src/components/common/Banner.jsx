import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Banner({ banners }) {
  console.log(banners);
  const baseURL = "https://shop.dnatuna.fun/api/";

  return (
    <Paper
      sx={{
        width: "100vw",
      }}
    >
      <Slide easing="ease" transitionDuration="500" indicators={true}>
        {banners.map((item) => (
          <img
            src={`${baseURL}${item.image[0]}`}
            alt="img"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "contain",
            }}
          />
        ))}
      </Slide>
    </Paper>
  );
}

export default Banner;
