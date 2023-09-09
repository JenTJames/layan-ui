import { styled } from "styled-components";

const StyledButton = styled.button`
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
  padding: ${({ variant }) => (variant === "text" ? "1rem 2rem" : "1rem 5rem")};

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
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      block={block}
      pill={pill}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
