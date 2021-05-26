import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Banner({ banners }) {
  return (
    <Paper
      sx={{
        width: "100vw",
      }}
    >
      <Slide easing="ease" transitionDuration="500" indicators={true}>
        {banners.map((item) => (
          <img
            src={`${item.image[0]}`}
            alt="img"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        ))}
      </Slide>
    </Paper>
  );
}

export default Banner;
