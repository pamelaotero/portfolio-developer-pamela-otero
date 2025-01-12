"use client";
import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { containedStyles, outlinedStyles } from "./styled/ButtonStyled";
import { ButtonTypes, TypeVariantButton } from "@/@types/ButtonTypes";

const ButtonCustom: React.FC<ButtonTypes> = ({
  size,
  title,
  variant,
  onClick,
  disabled = false,
  isLoading,
  icon,
  width,
  height,
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case TypeVariantButton.OUTLINED:
        return outlinedStyles;
      case TypeVariantButton.CONTAINED:
        return containedStyles;
      default:
        return containedStyles;
    }
  };

  const getIconButton = () => {
    return isLoading ? (
      <CircularProgress size={"1.3rem"} color="inherit" />
    ) : (
      icon
    );
  };

  return (
    <Button
      size={size}
      variant={variant as TypeVariantButton}
      sx={{
        ...getButtonStyles(),
        width: width || "auto",
        height: height || "auto",
      }}
      onClick={onClick}
      disabled={isLoading || disabled}
      endIcon={isLoading && getIconButton()}
    >
      {title}
    </Button>
  );
};

export default ButtonCustom;
