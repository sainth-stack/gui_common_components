// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Mixins, Palette, Shadows, Theme, Transitions, ZIndex, Avatar, Modal } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import Dialog from '@mui/material/Dialog';

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

export const StyledPopup = styled(Dialog)(({ theme }: IStyledProps) => {
  const isLight = theme.palette.mode === 'light';
  const positionStyle = {
    '& .MuiDialogTitle-root': {
      backgroundColor: "#1c84ee",
      color: "#fff",
      fontSize: "1.4rem",
      fontWeight: 400,
      padding: "10px"
    },
    '& .MuiButton-root': {
      textTransform: "none",
      color: "#fff",
      backgroundColor: "#1c84ee"
    }
  }
  return {
    ...positionStyle
  };
});
