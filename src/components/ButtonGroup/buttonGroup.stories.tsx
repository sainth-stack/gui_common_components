import ButtonGroup from "./buttonGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiMail } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import {FiLayers} from "react-icons/fi";
import { Tab } from "./buttonGroup";
const tabs: Array<Tab> = [
    {
        id: "all",
        title: "All",
        startIcon: <FiLayers />,
        endIcon: <IoNotificationsOutline />
    },
    {
        id: "one",
        title: "One",
        startIcon: <FiLayers />,
        endIcon: <FiMail />
    },
    {
        id: "two",
        title: "Two",
        startIcon: <FiLayers />,
      endIcon: <FiMail />
    },
    {
        id: "three",
        title: "Three",
        startIcon: <FiLayers />,
      endIcon: <FiMail />
    },
    {
        id: "four",
        title: "Four",
        startIcon: <FiLayers />,
      endIcon: <FiMail />
    }
]

const sampleData: Array<Tab> = [
    {
      id: "one",
      title: "one",
    },
    {
      id: "one",
      title: "one"
    },
    {
      id: "one",
      title: "one"
    },
    {
      id: "two",
      title: "two"
    },
    {
      id: "two",
      title: "two"
    },
    {
      id: "three",
      title: "three"
    },
    {
      id: "four",
      title: "four"
    },
    {
      id: "four",
      title: "four"
    },
    {
      id: "four",
      title: "four"
    },
    {
      id: "one",
      title: "one"
    }
  ]

export default {
    title: "CommonComponents/ButtonGroup",
    component: ButtonGroup,
    argTypes: {
        color: {
            options: ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
            control: {type: "radio"}
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {type: "radio"}
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {type: "radio"}
        },
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: {type: "radio"}
        }
    }
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />

export const ButtonGroupComponent = Template.bind({})

ButtonGroupComponent.args = {
        color: "primary",
        fullWidth: true,
        orientation: "horizontal",
        size: "medium",
        variant: "text",
        tabs: tabs,
        activeTabs: [],
        setActiveTab: () => {},
        sx: {'& .MuiButtonGroup-root': {border: "none"}},
        isGroup: false
}