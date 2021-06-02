import { Divider, Typography } from "@material-ui/core";
import React from "react";

const HeadingTitle = ({ title }) => {
  return (
    <>
      <Typography variant="h2" textAlign="center" m={3}>
        {title}
      </Typography>
    </>
  );
};

export default HeadingTitle;
