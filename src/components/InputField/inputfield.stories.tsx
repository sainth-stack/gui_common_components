import FormInput from ".";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import search from '../../assets/svg/search.svg';
export default {
    title: 'CommonComponents/Input',
    component: FormInput,
    argTypes: {
        variant: {
            options: ['outlined', 'filled'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium'],
            control: { type: 'radio' },
        },
    }
} as ComponentMeta<typeof FormInput>


const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />

export const FormComponent = Template.bind({});

FormComponent.args = {
    variant: "outlined",
    size: 'small',
    placeholder:'Enter Name',
    sx:{
        backgroundColor:""
    }
};

export const StartIcon: ComponentStory<typeof FormInput> = () => <FormInput placeholder="Enter Name" variant="outlined" size="small" startIcon={<img src={search} />} />
export const EndIcon: ComponentStory<typeof FormInput> = () => <FormInput placeholder="Enter Name" variant="outlined" size="small" endIcon={<img src={search} />} />

