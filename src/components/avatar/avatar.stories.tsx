import Avatar from "./avatar";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Scada from "../../assets/images/Scada.svg";
export default {
    title:'CommonComponents/Avatar',
    component:Avatar,
    argTypes: {
        variant: {
            options: ["circular", "rounded", "square", "square"],
            control: {type: 'radio'}
        },
        size: {
            options: ["sm", "md", "xl", "lg"],
            control: {type: "radio"}
        }
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const AvatarComponent = Template.bind({})

AvatarComponent.args = {
    variant: "square",
    size: "xl",
    src: Scada,
    alt: "Icon",
    sx: {backgroundColor: "blue",marginTop: 3}
}