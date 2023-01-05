// @mui
import { alpha, styled } from '@mui/material/styles';
import { Select, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';

// ----------------------------------------------------------------------

interface IStyledProps {
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
    size: "small" | "medium"
  }
}

export const StyledSelect = styled(Select)(({ theme, ownerState }: IStyledProps) => {
  const isLight = theme.palette.mode === 'light';
  const filledComponent = {
    "& .MuiSelect-filled": {
      border: '1px solid white',
      backgroundColor: 'white',
    },
    "&.Mui-focused .MuiSelect-filled": {
      border: '1px solid white',
      backgroundColor: 'white',
      outline: 0
    },
    "& .MuiSelect-filled:hover": {
      border: '1px solid white',
      backgroundColor: 'white'
    },
    "&.MuiInputBase-formControl .MuiSelect-filled": {
      border: '0px solid #ced4da',
      color: 'black'
    }
  }
  const outlineComponent = {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #ced4da'
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: '1px solid #ced4da'
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: '1px solid #ced4da'
    },
    "& .MuiSelect-outlined": {
      // padding:'14px',
      border: '0px solid #ced4da',
      color: 'black',
      ...(ownerState.size == "small" && {
        marginBottom:'6px',
        marginTop:'2px'
      }),
    }
  }
  return {
    position: 'relative',
    ...outlineComponent,
    ...filledComponent
  };
});


