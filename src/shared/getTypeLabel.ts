import { TypeColorLabel, TypeSizeLabel } from "@/@types/TitleTypes";

export const getSizeLabel = (typeSizeLabel: TypeSizeLabel) => {
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

export const getColorLabel = (typeColorLabel: TypeColorLabel) => {
  switch (typeColorLabel) {
    case TypeColorLabel.PRIMARY:
      return "var(--color-primary)";
    case TypeColorLabel.SECONDARY:
      return "var(--color-secondary)";
    default:
      return "var(--color-primary)";
  }
};
