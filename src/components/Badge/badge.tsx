import React from "react";
import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { StyledLabel } from './styles';


const variantTypes = {
    success: "success",
    failed: "failed",
    pending: "pending"
}

interface BadgeProps {
    variant?: keyof typeof variantTypes,
    children: React.ReactNode,
    sx?:React.CSSProperties
}

const Badge = forwardRef((props: BadgeProps, ref) => {
    const theme = useTheme();
    const {
        variant = "success",
        sx,
        children } = props;

    return (
        <StyledLabel
            ownerState={{ variant }}
            theme={theme}
            sx={{...sx}}
        >
            {children}
        </StyledLabel>
    );
});
export default Badge;
