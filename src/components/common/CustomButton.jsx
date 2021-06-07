import { Button } from "@material-ui/core";
import React from "react";

const CustomButton = (props) => {
  return (
    <>
      {props.variant === "outlined" ? (
        <Button
          {...props}
          sx={{
            color: "#17330F",
            border: "1px solid #338C1B",
            "&:hover": {
              backgroundColor: "rgba(206, 230, 200, 100)",
              border: "1px solid #338C1B",
            },
          }}
        />
      ) : (
        <Button
          {...props}
          sx={{
            color: "white",
            backgroundColor: "#3DA61F",
            "&:hover": {
              backgroundColor: "#338C1B",
            },
          }}
        />
      )}
    </>
  );
};

export default CustomButton;
