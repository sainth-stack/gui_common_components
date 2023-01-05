import * as React from "react";
import Link from "@mui/material/Link";
import { StyledBreadcrumbs } from "./styles";
import { forwardRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowRight} from "react-icons/md";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
interface BreadcrumbProps {
  child1?: React.ReactNode;
  child2?: React.ReactNode;
  child3?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  separableicon?: React.ReactNode;
  maxItems?: number;
  separator?: any;
  sx?: any;
  fontSize?: number;
  fontWeight?: number;
  breaddata?: any;
}

const Breadcrumb = forwardRef(
  (
    {
      startIcon,
      fontSize,
      fontWeight,
      separator = ">",
      sx,
      endIcon,
      separableicon,

      ...other
    }: BreadcrumbProps,
    ref
  ) => {
    return (
      <div role="presentation" onClick={handleClick}>
        <StyledBreadcrumbs
          role="presentation"
          separator={separableicon ? <MdOutlineKeyboardArrowRight fontSize="medium" /> : separator}
          aria-label="breadcrumb"
          {...other}
        >
          {other.breaddata?.map((item: any) => {
            return (
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/"
                fontSize={fontSize}
                fontWeight={fontWeight}
              >
                {startIcon && item.startIcon}
                {item.name}
                {endIcon &&  item.startIcon}
              </Link>
            );
          })}
        </StyledBreadcrumbs>
      </div>
    );
  }
);
export default Breadcrumb;
