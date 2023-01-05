import Header from "./header";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { controls, menuItems } from "./header";
import {MdLogout} from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import {FiLayers} from "react-icons/fi";
import xsiLogo from "../../assets/images/xsiLogo.svg"
import avatar from "../../assets/images/avatar.jpg";
const controls_data: Array<controls> = [
    {
        id: "theme",
        label: "Theme",
        icon: <FiMail />,
    },
    {
        id: "notification",
        label: "Notification",
        icon: <IoNotificationsOutline />
    },
    {
        id: "layers",
        label: "Layers",
        icon: <FiLayers />
    }
  ]
  
const menuitems: Array<menuItems> = [
    {
      id: "logout",
      label: "Logout",
      icon: <MdLogout />
    }
  ]

export default {
    title: "CommonComponents/Header",
    component: Header,
    argTypes: {
        position: {
            options: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
            control: {type: "radio"}
        },
        color: {
            options: ['default', 'inherit', 'primary', 'secondary', 'transparent'],
            control: {type: "radio"}
        }
    }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const HeaderComponent = Template.bind({})

HeaderComponent.args = {
    color: "default",
    position: "absolute",
    enableColorOnDark: true,
    searchBar: true,
    controls: controls_data,
    user: "Super Admin",
    menuItems: menuitems,
    logo: xsiLogo,
    avatarImg: avatar
}