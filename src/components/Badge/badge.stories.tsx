import Badge from "./badge";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title: 'CommonComponents/Badge',
    component: Badge,
    argTypes: {
        variant: {
            options: ['success', 'failed', 'pending'],
            control: { type: 'radio' },
        },
    }
} as ComponentMeta<typeof Badge>


const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const BadgeComponent = Template.bind({});

BadgeComponent.args = {
    variant: "success",
    children: 'Success',
    sx:{
        backgroundColor:""
    }
};


