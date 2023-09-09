import React from "react";
import { styled } from "styled-components";

const StyledText = styled.p`
  font-size: ${({ type }) =>
    type === "h1"
      ? "6em"
      : type === "h2"
      ? "5em"
      : type === "h3"
      ? "4em"
      : type === "h4"
      ? "3em"
      : type === "h5"
      ? "2em"
      : type === "h6"
      ? "1.5em"
      : "1em"};
  font-weight: ${({ type }) => (type.startsWith === "h" ? 600 : 500)};
  color: ${({ color }) =>
    color.startsWith("#") ||
    color.toLowerCase().startsWith("rgb") ||
    color.toLowerCase().startsWith("hsl")
      ? color
      : "var(--" + color + ")"};
`;
const Text = ({
  children = "Text not provided",
  type = "p",
  color = "inherit",
}) => {
  return (
    <StyledText type={type} color={color}>
      {children}
    </StyledText>
  );
};

export default Text;
