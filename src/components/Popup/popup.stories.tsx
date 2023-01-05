import Popup from "./popup";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title:'CommonComponents/Popup',
    component:Popup,
    argTypes: {
        scroll: {
            options: ['body', 'paper'],
            control: {type: "radio"}
        },
        maxWidth: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: {type: "radio"}
        },
        transition: {
            options: ['fade', 'grow', 'slide', 'zoom'],
            control: {type: 'radio'}
        },
        slideDirection: {
            options: ['down', 'left', 'right', 'up'],
            control: {type: "radio"}
        }
    }
} as ComponentMeta<typeof Popup>

const Template: ComponentStory<typeof Popup> = (args) => {
    return (
        <Popup 
            {...{
                ...args
            }}
        />
    )
}

export const PopupModal = Template.bind({})

PopupModal.args = {
    isOpen: true,
    id: "dialog",
    heading: "Title",
    children: <div>Sample Body {[...new Array(50)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')} </div>,
    isDraggable: true,
    fullScreen: false,
    fullWidth: false,
    transition: "fade",
    slideDirection: "down",
    sx: {'& .MuiDialogTitle-root':{backgroundColor: "red"}}
}
