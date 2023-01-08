import * as React from "react";
import Link from "@mui/material/Link";
import { StyledBreadcrumbs } from "./styles";
import { forwardRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowRight} from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
  md?:any;
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
      md,
      ...other
    }: BreadcrumbProps,
    ref 
  ) => {
    const navigate = useNavigate();
    const navigateTo=(url:string)=>()=>{
      navigate(url)
     }
    return (
      <div role="presentation" onClick={handleClick}>
        <StyledBreadcrumbs
          role="presentation"
          separator={separableicon ? <MdOutlineKeyboardArrowRight fontSize="medium" /> : separator}
          aria-label="breadcrumb"
          sx={{
            "& .MuiBreadcrumbs-li": {
              ":hover": {
                fontWeight:600,
              },
            },
          }}
          {...other}
        >
          {other.breaddata?.map((item: any,index:any) => {
            return (
              <Link
                key={index}
                underline="none"
                sx={{ display: "flex", alignItems: "center",cursor:'pointer' }}
                color="inherit"
                fontSize={fontSize}
                fontWeight={fontWeight}
                onClick={navigateTo(item?.url as string)}
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