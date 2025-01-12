import { LayoutContainerTypes } from "@/@types/LayoutTypes";
import { Stack } from "@mui/material";
import React from "react";

const LayoutContainer: React.FC<LayoutContainerTypes> = ({ children }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        background: "var(--foreground)",
      }}
      padding={{ xs: "3rem", md: "10rem" }}
      border="2px solid green"
    >
      {children}
    </Stack>
  );
};

export default LayoutContainer;
