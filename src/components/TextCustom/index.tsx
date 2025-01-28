import React from "react";
import { TextCustomStyled } from "./styled/TextCustomStyled";

interface TextCustomProps {
  label: string;
}
const TextCustom: React.FC<TextCustomProps> = ({ label }) => {
  return <TextCustomStyled>{label}</TextCustomStyled>;
};

export default TextCustom;
