import React from "react";
import TextArea from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title: 'CommonComponents/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>


const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />
export const TextAreaComponent = Template.bind({});
TextAreaComponent.args = {
    placeholder: 'Enter Name',
    minRows:4,
    sx:{
        backgroundColor:""
    }
};