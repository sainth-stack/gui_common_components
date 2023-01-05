import { alpha, styled } from '@mui/material/styles';
import { Box, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import Breadcrumbs from '@mui/material/Breadcrumbs'

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

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }: IStyledProps) => {
 
  return {
   
};
});
