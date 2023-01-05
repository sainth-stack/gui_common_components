// @mui
import {  styled } from '@mui/material/styles';
import { Box, Mixins, Palette, Shadows,  Transitions, ZIndex } from '@mui/material';
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
  },
  ownerState: {
    textColor:  'primary' 
    variant:  'scrollable'| 'standard',  

  }
}

export const StyledTabpanel = styled(Box)(({ theme, ownerState }: IStyledProps) => {

  const activeStyle= {
    '& .Mui-selected.MuiToggleButton-root': {
      backgroundColor: theme.palette.primary.dark,
      ':hover':{
        backgroundColor: theme.palette.primary.dark
      },
      color: theme.palette.common.white
    },
    '& .MuiTabScrollButton-root':{
      color:theme.palette.primary.dark
    }
  }


  return {  
    textTransform: 'capitalize',
    fontSize: theme.typography.pxToRem(14),
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
    ...activeStyle
  };
});
