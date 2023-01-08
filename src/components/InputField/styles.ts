// @mui
import { alpha, styled } from '@mui/material/styles';
import { TextField, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
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
        size:"small" | "medium",
        variant?: "outlined" | "filled" | "standard",
    }
}

export const StyledInput = styled(TextField)(({ theme, ownerState }: IStyledProps) => {
    const isLight = theme.palette.mode === 'light';
    const filledComponent = {
        "& .MuiFilledInput-root": {
            backgroundColor: "white",
            borderRadius: '0.20rem',
            borderBottom:'1px solid #ced4da',
        },
        "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
            backgroundColor: "transparent",
            borderBottom:'1px solid #ced4da'
        },
        "& .MuiFilledInput-root:hover": {
            backgroundColor: "white",
            borderBottom:'1px solid #ced4da'
        },
        "& .MuiFilledInput-root:before": {
            backgroundColor: "transparent",
            borderBottom:'1px solid #ced4da'
        },
        "& .MuiFilledInput-root:after": {
            backgroundColor: "white",
            borderBottom:'1px solid #ced4da'
        },
        "& .MuiFilledInput-root.Mui-focused": {
            backgroundColor: "white",
            borderBottom:'1px solid #ced4da'
        }
    }
    const outlineComponent = {
        "& .MuiOutlinedInput-root:hover fieldset": {
            borderColor: "#ced4da",
        },
        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
            outline: 'none',
            boxShadow: 'none',
            border: '1px solid #ced4da'
        },
        "& .MuiOutlinedInput-root": {
            padding:0,
        }
    }
    return {
        position: 'relative',
        width: '100%',
        fontSize: '0.875rem',
        'input': {
            '&::placeholder': {
              textOverflow: 'ellipsis !important',
              color: 'black',
            }
          },
          '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        ...outlineComponent,
        ...filledComponent,

    };
});
export const calHeight = (size: string) => {
    const input_sizes: any = {
        xs: '15px',
        sm: '25px',
        md: '30px',
        lg: '35px'
    };
    const custom_size = Object.keys(input_sizes).filter((item) => item === size)[0]
    return input_sizes[custom_size];
}