// @mui
import {  styled } from '@mui/material/styles';
import { Card, Mixins, Palette, Shadows,Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';

interface CardProps{
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
    variant: 'outlined',
    rotate:boolean
  }
}

export const CardLabel = styled(Card)(({ theme, ownerState }: CardProps) => {
  const outliineVariant = ownerState.variant === 'outlined';
  return {
    flex:'1 1 auto',
    fontSize: theme.typography.pxToRem(19.5),
    width:'max-content',
    backgroundColor:'white',
    padding:'6px',
    outliineVariant,
    position: 'relative',
    transition: 'transform 0.4s',
    transformStyle: 'preserve-3d',
    cursor:'pointer',
    ...(ownerState.rotate && {
      transform: 'rotateY(180deg)',
    })
    };
});
