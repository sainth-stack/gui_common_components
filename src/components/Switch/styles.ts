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
    padding: 2,
    width:'80px',
    '& .MuiSwitch-switchBase':{
     paddingLeft:'6px',
     '&.Mui-checked':{
      transform: 'translateX(39px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '0d6efd',
      },
    },
    },
    '& .MuiSwitch-track': {
      backgroundColor:'0d6efd',
      borderRadius: 30 ,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 21,
        height: 22,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 2 22 22" fill="white" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>')`,
        left: 10,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 24 24" fill="None" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="2" y="2" width="9" height="9"></rect><rect x="15" y="2" width="9" height="9"></rect><rect x="15" y="15" width="9" height="9"></rect><rect x="2" y="15" width="9" height="9"></rect></svg>')`,
        right: 11,
        top:18,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      color:'white',
      width: 30,
      height: 28,
      // marginLeft:15,
      marginTop:-4,
    },
  }));
