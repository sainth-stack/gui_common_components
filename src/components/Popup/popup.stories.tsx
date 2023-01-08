import Popup from "./popup";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title:'CommonComponents/Popup',
    component:Popup,
    argTypes: {
        
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
    children: <div>Sample Body {[...new Array(50)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')} </div>,
    sx: {position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: "none",
    borderRadius: "4px",
    boxSizing: "none",
    width: "60%",
    maxHeight: "75%",
    overflow: "auto"
    }
}
