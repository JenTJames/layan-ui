import React from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
  padding: ${({ startOrnament, endOrnament }) =>
    startOrnament
      ? "10px 35px"
      : endOrnament
      ? "10px 35px 10px 10px"
      : "10px 15px"};
  outline: none;
  border: ${({ variant, color }) =>
    variant === "outlined" ? "1px solid var(--" + color + ")" : "none"};
  border-bottom: ${({ variant, color }) =>
    variant === "underlined"
      ? "1px solid var(--" + color + ")"
      : variant === "outlined"
      ? "1px solid var(--" + color + ")"
      : "none"};
  border-radius: ${({ variant }) =>
    variant === "outlined" || variant === "soft" ? "5px" : "0px"};
  background: ${({ variant, color }) =>
    variant === "underlined" || variant === "outlined"
      ? "transparent"
      : "var(--" + color + "-transparent)"};

  &:focus {
    border-color: ${({ color }) => "var(--" + color + "-opaque)"};
  }
`;

const Input = ({
  variant = "outlined",
  color = "slate",
  type = "text",
  placeholder = "Enter value",
  startOrnament,
  endOrnament,
}) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {startOrnament && (
        <div
          style={{
            position: "absolute",
            top: "9px",
            left: "10px",
          }}
        >
          {startOrnament}
        </div>
      )}
      <StyledInput
        variant={variant}
        color={color}
        type={type}
        placeholder={placeholder}
        startOrnament={startOrnament}
        endOrnament={endOrnament}
      />
      {endOrnament && (
        <div
          style={{
            position: "absolute",
            top: "9px",
            right: "10px",
          }}
        >
          {endOrnament}
        </div>
      )}
    </div>
  );
};

export default Input;
