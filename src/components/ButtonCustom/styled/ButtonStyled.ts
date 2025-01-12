export const baseStyles = {
  textTransform: "none",
  fontSize: "14px",
  padding: "4px 16px",
  lineHeight: "24px",
  fontFamily: "Urbanist",
  boxShadow: "none",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "var(--boxShadowDefault)",
  },
  borderRadius: "4rem",
};

export const outlinedStyles = {
  ...baseStyles,
  background: "transparent",
  color: "var(--color-primary)",
  border: "1px solid var(--color-primary)",
};

export const containedStyles = {
  ...baseStyles,
  background: "var(--color-secondary-dark)",
  color: "var(--color-bg-light)",
};
