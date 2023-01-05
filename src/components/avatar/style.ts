// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Mixins, Palette, Shadows, Theme, Transitions, ZIndex, Avatar } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';

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
  ownerState: {
    variant: 'circular' | 'rounded' | 'square'
  }
}

export const StyledAvatar = styled(Avatar)(({ theme, ownerState }: IStyledProps) => {
  const isLight = theme.palette.mode === 'light';
  const avatarStyles = {
    '& .MuiAvatar-img': {
      borderRadius: "50%"
    }
  }
  return {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    verticalAlign: "middle",
    padding: "3px",
    ...avatarStyles
  };
});
