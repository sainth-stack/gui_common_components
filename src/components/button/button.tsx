import React from "react";
// import PropTypes from 'prop-types';
import { forwardRef } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
//
import { StyledButton } from "./styles";
import { Box } from "@mui/material";

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";

  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";

  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: any;
  onClick?: () => void;
}

const Button:any = forwardRef(
  (
    {
      startIcon,
      endIcon,
      color,
      variant,
      size,
      children, 
      sx, 
      onClick
    }: ButtonProps,
    ref
  ) => {
    const theme = useTheme();

    const iconStyle = {
      width: 16,
      height: 16,
      "& svg, img": { width: 1, height: 1, objectFit: "cover" },
    };
    return (
      <StyledButton theme={theme} variant={variant} color={color} size={size} sx={{...sx}}
      onClick={onClick} startIcon={startIcon} endIcon={endIcon}>
        {children}
      </StyledButton>
    );
  }
);
export default Button;