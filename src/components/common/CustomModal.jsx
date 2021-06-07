import { Box, Modal } from "@material-ui/core";
import React from "react";

const CustomModal = (props) => {
  return (
    <Modal {...props}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 12,
        }}
      >
        {props.children}
      </Box>
    </Modal>
  );
};
export default CustomModal;
