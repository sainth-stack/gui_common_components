import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { CardLabel } from "./styles";
import React from 'react'

interface CardProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode
  variant?: "outlined",
  sx?: any,
  flip?: boolean,
  footerIcons?: React.ReactNode,
  backContent?: React.ReactNode
}

const Cardtheme = forwardRef(
  ({ variant = "outlined", header, children, sx, footer, flip = false, footerIcons, backContent, ...other }: CardProps, ref) => {
    const theme = useTheme();
    const [rotate, setRotate] = React.useState(false)
    const [footerVisible, setFooterVisible] = React.useState(false)
    return (
      <CardLabel
        ownerState={{ variant, rotate }}
        theme={theme}
        onMouseEnter={() => { setFooterVisible(true) }}
        onMouseLeave={() => { setFooterVisible(false) }}
        sx={{
          ...sx
        }}
        {...other}
        onClick={() => !flip ? () => { } : setRotate(!rotate)}>
        <Grid sx={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          ...(rotate && {
            display: 'none',
            backfaceVisibility: 'hidden',
          }),
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid item>
              {header && <Box sx={{ fontSize: 29.5, pt: 1.25, pr: 1.25 }}>{header}</Box>}
              {children && <Box sx={{ fontSize: 19.5, pt: 1.23, pr: 1.25 }}>{children}</Box>}
              {footer && <Box sx={{ fontSize: 13.5, pt: 1.25, pr: 1.25, }}>{footer}</Box>}
            </Grid>
            <Grid item>
              {flip && <Box sx={{ fontSize: 13.5, pr: 1.25, display: footerVisible ? '' : 'none' }}>{footerIcons}</Box>}
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{
          transform: 'rotateY(180deg)',
          ...(!rotate && {
            display: 'none',
            backfaceVisibility: 'hidden'
          })
        }}>
          {backContent && <Box sx={{ fontSize: 19.5, pt: 1.25, pr: 1.25 }}>{backContent}</Box>}
        </Grid>
      </CardLabel >
    );
  }
);
export default Cardtheme;






