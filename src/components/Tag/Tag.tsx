"use client";
import { TypeColorLabel } from "@/@types/TitleTypes";
import { getColorLabel } from "@/shared/getTypeLabel";
import { Typography } from "@mui/material";
import React from "react";
import { TagBoxStyled } from "./styled/TagBoxStyled";

interface TagProps {
  label: string;
  color: TypeColorLabel;
}
const Tag: React.FC<TagProps> = ({ color, label }) => {
  return (
    <TagBoxStyled border={`1px solid ${getColorLabel(color)}`}>
      <Typography sx={{ color: getColorLabel(color) }}>{label}</Typography>
    </TagBoxStyled>
  );
};

export default Tag;
