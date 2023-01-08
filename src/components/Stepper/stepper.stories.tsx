import Stepper from ".";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
export default {
    title:'CommonComponents/Stepper',
    component: Stepper,
    argTypes: {}
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />

export const StepperComponent = Template.bind({})

StepperComponent.args = {
    steps: [
        {
            id: 1, label: 'Select System Data Models'
        },
        {
            id: 2, label: 'Select System Data Attributes'
        },
        {
            id: 3, label: 'Select Data API Models'
        },
        {
            id: 4, label: 'Select Data API Attributes'
        }
    ],
    isIconStepper: false,
    icons: {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
        4: <VideoLabelIcon />
      },
      sx:{'& .MuiStepConnector-alternativeLabel':{top:"24px"}},
}