// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';

// ----------------------------------------------------------------------
const variantTypes = {
  success: "success",
  failed: "failed",
  pending: "pending"
}

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
    variant?: keyof typeof variantTypes
  }
}

export const StyledLabel = styled(Box)(({ theme, ownerState }: IStyledProps) => {
  const isLight = theme.palette.mode === 'light';

  const successVariant = ownerState.variant === 'success';

  const failedVariant = ownerState.variant === 'failed';

  const pendingVariant = ownerState.variant === 'pending';

  const defaultStyle = {
      // success
      ...(successVariant && {
        backgroundColor: 'rgba(52, 195, 143, .18)',
        color: '#34c38f'
            }),
      // failed
      ...(failedVariant && {
        color: '#ef6767',
        backgroundColor: 'rgba(239, 103, 103, .18)',
      }),
      //pending
      ...(pendingVariant && {
        backgroundColor:'rgba(0, 82, 254, 0.08)',
        color:'#0052fe'
        }),
  };


  return {
    display: 'inline-block',
    padding: '.25em .4em',
    lineHeight:1,
    whiteSpace:'nowrap',
    verticalAlign:'baseline',
    borderRadius:'0.25rem',
    // padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,
    ...defaultStyle,
  };
});
