import { styled } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 600;
  border-radius: ${({ pill }) => (pill ? "30px" : "7px")};
  border: ${({ variant, color }) =>
    variant === "outlined" ? "1px solid var(--" + color + ")" : "none"};
  color: ${({ variant, color }) =>
    variant === "text" || variant === "outlined" || variant === "soft"
      ? "var(--" + color + ")"
      : "#fff"};
  background-color: ${({ variant, color }) =>
    variant === "contained"
      ? "var(--" + color + ")"
      : variant === "soft"
      ? "var(--" + color + "-transparent)"
      : "transparent"};
  width: ${({ block }) => (block ? "100%" : "auto")};
  padding: ${({ fit }) =>
    fit === "normal"
      ? "1rem 1.7rem"
      : fit === "relaxed"
      ? "1.5rem 5rem"
      : "0.7rem 1rem"};

  &:hover {
    background-color: ${({ variant, color }) =>
      variant === "text" || variant === "outlined"
        ? "var(--" + color + "-transparent)"
        : variant === "soft"
        ? "var(--" + color + "-opaque)"
        : "var(--" + color + ")"};
  }
`;

const Button = ({
  children = "Button",
  onClick = () => {},
  variant = "contained",
  color = "safe",
  block = false,
  pill = false,
  fit = "normal",
  startIcon,
  endIcon,
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      block={block}
      pill={pill}
      onClick={onClick}
      fit={fit}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </StyledButton>
  );
};

export default Button;
