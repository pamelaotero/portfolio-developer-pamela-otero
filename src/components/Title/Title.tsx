"use client";

import { TitleProps, TypeColorLabel, TypeSizeLabel } from "@/@types/TitleTypes";
import { Typography } from "@mui/material";
import React from "react";

const Title: React.FC<TitleProps> = ({
  title,
  typeSizeLabel,
  typeColorLabel,
  isBold,
}: TitleProps) => {
  const getSizeLabel = () => {
    switch (typeSizeLabel) {
      case TypeSizeLabel.SMALL:
        return "var(--font-small)";
      case TypeSizeLabel.MEDIUM:
        return "var(--font-medium)";
      case TypeSizeLabel.LARGE:
        return "var(--font-large)";
      default:
        return "var(--font-medium)";
    }
  };

  const getColorLabel = () => {
    switch (typeColorLabel) {
      case TypeColorLabel.PRIMARY:
        return "var(--color-primary)";
      case TypeColorLabel.SECONDARY:
        return "var(--color-secondary)";
      default:
        return "var(--color-primary)";
    }
  };

  return (
    <Typography
      sx={{
        fontSize: getSizeLabel(),
        fontWeight: isBold ? "bold" : "normal",
        color: getColorLabel(),
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
