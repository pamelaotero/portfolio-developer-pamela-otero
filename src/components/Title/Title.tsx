"use client";

import { TitleProps } from "@/@types/TitleTypes";
import { getColorLabel, getSizeLabel } from "@/shared/getTypeLabel";
import { Typography } from "@mui/material";
import React from "react";

const Title: React.FC<TitleProps> = ({
  title,
  typeSizeLabel,
  typeColorLabel,
  isBold,
}: TitleProps) => {
  return (
    <Typography
      sx={{
        fontSize: getSizeLabel(typeSizeLabel),
        fontWeight: isBold ? "bold" : "normal",
        color: getColorLabel(typeColorLabel),
        fontFamily: "Urbanist",
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
