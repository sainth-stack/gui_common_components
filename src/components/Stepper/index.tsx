import React from 'react';
import {Stepper as MuiStepper, Step, StepLabel} from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import {MuiStepConnector, MuiStepIconBasedRoot, MuiStepIconRoot} from './style';

interface IStep{
    id: number,
    label: string
}

interface StepperProps{
    steps: IStep[],
    children?: React.ReactNode,
    sx?: any,
    icons?: any,
    isIconStepper?: boolean,
    setActiveStep?: (step: number) => void,
    activeStep?: number,
    handleNext?: () => void,
    handleBack?: () => void,
}

const Stepper = ({steps = [], children, sx, icons,isIconStepper,setActiveStep = () => {}, activeStep,handleNext, handleBack,  ...other} : StepperProps) => {
    // const theme = useTheme();
    
      const handleStep = (step: number) => () => {
        setActiveStep(step);
      };
        
    const StepIcon = (props: any) => {
        const { active, completed, className } = props;
        return (
          <MuiStepIconRoot ownerState={{ active }} className={className}>
            <div className={`StepIcon-numeric ${active ? 'StepIcon-numeric-active' : ''}`}>
                {props.icon}
            </div>
          </MuiStepIconRoot>
        );
    }

    const MuiBasedStepIcon = (props: any) => {
        const { active, completed, className } = props;     
        return (
          <MuiStepIconBasedRoot ownerState={{ completed, active }} className={className}>
            {icons[props.icon]}
          </MuiStepIconBasedRoot>
        );
      }

    return <>
         <MuiStepper sx={{...sx}} alternativeLabel activeStep={activeStep} connector={<MuiStepConnector />}>
            {steps.map((step,index) => (
            <Step key={index}>
                <StepLabel onClick={handleStep(index)} StepIconComponent={isIconStepper ? MuiBasedStepIcon : StepIcon }>{step.label}</StepLabel>
            </Step>
            ))}
        </MuiStepper>
        {children}
    </>
}

export default Stepper;