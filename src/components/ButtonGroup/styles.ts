// @mui
import { alpha, styled } from '@mui/material/styles';
import { Mixins, Palette, Shadows, Theme, Transitions, ZIndex, ButtonGroup } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';


interface IStyledProps{
    theme: {
      mixins: Mixins;
      palette: Palette;
      shadows: Shadows;
      transitions: Transitions;
      typography: Typography;
      zIndex: ZIndex;
      unstable_strictMode?: boolean;
    }
  }

  export const StyledButtonGroup = styled(ButtonGroup)(({ theme }: IStyledProps) => {
    const isLight = theme.palette.mode === "light";
    const styles = {}
    return {
        ...styles
    }
  })