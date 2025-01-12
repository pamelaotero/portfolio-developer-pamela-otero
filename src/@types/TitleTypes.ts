export interface TitleProps {
  title: string;
  typeSizeLabel: TypeSizeLabel;
  isBold?: boolean;
  typeColorLabel: TypeColorLabel;
}

export enum TypeSizeLabel {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum TypeColorLabel {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  WARNING = "warning",
  ALERT = "alert",
}
