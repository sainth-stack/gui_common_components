import  Button from "./button";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertSVG } from "../../assets/svg";
export default {
    title:'CommonComponents/Button',
    component:Button,
    argTypes:{
        variant:{
            options:['outlined','contained','text'],
            control: { type: 'radio' },
        },
        color:{
            options:['inherit' ,'primary','secondary','success', 'error','info','warning'],
            control: { type: 'radio'}
        },
        size:{
            options:['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
      

    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Buttoncomponent = Template.bind({});

Buttoncomponent.args = {
    variant: "contained",
    color: "primary",
    size: "medium",
    children: 'SampleButton',
};
export const StartIcon: ComponentStory<typeof Button> = (args) => <Button variant="outlined" startIcon={<AlertSVG height={20} width={20}/>} />
export const EndIcon: ComponentStory<typeof Button> = (args) => <Button variant="outlined" endIcon={<AlertSVG height={20} width={20}/>} />
export const StartandEndIcon: ComponentStory<typeof Button> = (args) => <Button variant="outlined" endIcon={<AlertSVG height={20} width={20} />} startIcon={<AlertSVG height={20} width={20}/>}  />