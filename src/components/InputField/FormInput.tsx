import React, { forwardRef } from "react";
import { calHeight, StyledInput } from "./styles";
import { useTheme } from '@mui/material/styles';
import Input from '@mui/material/Input';
import { Box, makeStyles, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
interface FormInputProps {
    type?: React.HTMLInputTypeAttribute,
    size?: "small" | "medium",
    variant?: "outlined" | "filled" | "standard",
    name?: string,
    value?: any,
    placeholder?: string,
    disabled?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
    innerRef?: React.RefObject<HTMLInputElement>,
    startIcon?: React.ReactSVGElement | React.ReactNode,
    endIcon?: React.ReactSVGElement | React.ReactNode,
    sx?:any
}

const FormInput = forwardRef((props: FormInputProps, ref) => {
    const theme = useTheme();
    const {
        type = "text",
        size = "small",
        variant = "outlined",
        name,
        value,
        placeholder,
        disabled = false,
        onChange,
        onBlur,
        onFocus,
        innerRef,
        sx,
        startIcon = null,
        endIcon = null
    } = props;
    const height = calHeight(size)
    return (
        <StyledInput
            ownerState={{ variant, size }}
            size={size}
            theme={theme}
            variant={variant}
            sx={{...sx}}
            InputProps={{
                startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
                endAdornment: <InputAdornment position="end">{endIcon}</InputAdornment>
              }}
            {...{
                type,
                name,
                value,
                placeholder,
                disabled,
                onChange,
                onFocus,
                onBlur
            }}
        />
    )

})
export default FormInput;