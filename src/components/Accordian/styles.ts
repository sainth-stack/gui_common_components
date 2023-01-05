// @mui
import { alpha, styled } from '@mui/material/styles';
import { Accordion, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
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

export const StyledAccordian = styled(Accordion)(({ theme }: IStyledProps) => {
    const isLight = theme.palette.mode === 'light';
    return {
        resize: 'vertical',
        display: 'block',
        width: '100%',
        "&.MuiAccordion-root":{
            border: '1px solid #e9e9ef',
            boxShadow:'none',
            borderRadius:'15px'
        },
        "& .MuiAccordionSummary-content.Mui-expanded":{
            margin:'12px 0 0 0'
        },
        "& .MuiAccordionDetails-root":{
           padding:'0 0 0 30px'
        }
    }
})

export const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight:'80px'
}));
