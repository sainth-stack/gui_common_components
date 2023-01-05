import React, { forwardRef } from "react";
import { useTheme } from '@mui/material/styles';
import { StyledTextArea } from "./styles";
interface TextFieldProps{
    name ?: string,
    placeholder ?: string,
    value ?: string,
    minRows ?: any,
    onChange ?: (event : React.ChangeEvent<HTMLTextAreaElement>) => void,
    onFocus ?: (event : React.FocusEvent<HTMLTextAreaElement>) => void,
    onBlur ?: (event : React.FocusEvent<HTMLTextAreaElement>) => void,
    sx?:React.CSSProperties
}

const TextArea = forwardRef((props : TextFieldProps)=>{
    const theme = useTheme();
    let inputRef;
    const {
        name,
        placeholder,
        value,
        minRows,
        onChange = () => {/* */},
        onFocus = () => {/* */},
        onBlur = () => {/* */},
        sx
    } = props;

    return <StyledTextArea 
    theme={theme}
    minRows={minRows}
    sx={{...sx}}
    {...{
        name,
        placeholder,
        value,
        onChange,
        onFocus,
        onBlur
    }}
    ref={inputRef}
    />
})

export default TextArea;