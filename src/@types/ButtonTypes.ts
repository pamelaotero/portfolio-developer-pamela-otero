import { ReactNode } from "react";

export enum TypeSizeButton {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum TypeVariantButton {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}

export interface ButtonTypes {
  size: TypeSizeButton;
  title: string;
  variant: TypeVariantButton;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  name?: string;
  width?: string;
  height?: string;
}
