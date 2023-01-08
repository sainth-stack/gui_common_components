import {  styled } from '@mui/material/styles';
import {  Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import Switch, { SwitchProps } from '@mui/material/Switch';

// // ----------------------------------------------------------------------

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
    StartIcon?: React.ReactNode,
    EndIcon?: React.ReactNode,
}

export const SwitchStyle = styled(Switch)(({ theme, StartIcon, EndIcon }:IStyledProps) => ({
  padding: 9,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16
    },
    
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  }
  }));
