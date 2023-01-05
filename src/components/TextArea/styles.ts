// @mui
import { alpha, styled } from '@mui/material/styles';
import { TextareaAutosize, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
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
    }
}

export const StyledTextArea = styled(TextareaAutosize)(({ theme }: IStyledProps) => {
    const isLight = theme.palette.mode === 'light';
    return {
        resize: 'vertical',
        display: 'block',
        width: '100%',
        padding: '0.47rem 0.30rem',
        fontSize: '.8125rem',
        minHeight: `calc(1.5em + 0.94rem + 2px)`,
        fontWeight: '400',
        lineHeight: '1.5',
        backgroundClip: 'padding-box',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem',
        outline: 0
    }
})
