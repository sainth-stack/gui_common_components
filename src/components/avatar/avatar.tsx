// import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { StyledAvatar } from './style';

interface AvatarProps{
    alt ?: string,
    children?: React.ReactNode,
    size ?: "sm" | "md" | "lg" | "xl",
    image ?: string,
    sx?: any,
    src?: string,
    onClick ?: () => void
    variant: 'circular' | 'rounded' | 'square'
}

const Avatar = forwardRef(({children,size="lg",image="",variant="circular",sx, ...other  } : AvatarProps, ref) => {
    const sizes = {
        sm: {width: "16px", height: "16px"},
        md: {width: "24px", height: "24px"},        
        lg: {width: "36px", height: "36px"},        
        xl: {width: "60px", height: "60px"}
    }    
    const theme = useTheme();
  return (
    <StyledAvatar
        ownerState={{variant}}
        sx={{
        ...sx,...sizes[size]
        }}  
        theme={theme}
        variant={variant}
        {...other}
    >
        {children}
    </StyledAvatar>
  )
})

export default Avatar