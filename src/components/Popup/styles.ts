// @mui
import { alpha, styled } from '@mui/material/styles';
import { Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import Modal from '@mui/material/Modal';

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
  }
}

export const StyledPopup = styled(Modal)(({ theme }: IStyledProps) => {
  const isLight = theme.palette.mode === 'light';
  const positionStyle = {
    "& .MuiModal-root":{
      
    }
  }
  return {
      ...positionStyle
  };
});
