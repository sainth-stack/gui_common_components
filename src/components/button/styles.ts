// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import Button from '@mui/material/Button'

// ----------------------------------------------------------------------


interface IStyledProps{
    theme: {
        mixins: Mixins;
        palette: Palette;
        shadows: Shadows;
        transitions: Transitions;
        typography: Typography;
        zIndex: ZIndex;
        unstable_strictMode?: boolean;
      },

}

export const StyledButton = styled(Button)(({ theme }: IStyledProps) => {
 


  return {
   
    fontSize: theme.typography.pxToRem(12),
    // padding:'0.47rem 0.75rem',
    fontFamily: theme.typography.fontFamily,
 
};
});
