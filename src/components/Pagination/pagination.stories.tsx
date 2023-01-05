import Pagination from './pagination';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "CommonComponents/Pagination",
    component: Pagination,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'standard'],
            control: {type: 'radio'}
        },
        shape: {
            options: ['circular', 'rounded'],
            control: {type: 'radio'}
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {type: 'radio'}
        },
        variant: {
            options: ['outlined', 'text'],
            control: {type: 'radio'}
        }
    }
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const PaginationComponent = Template.bind({})

PaginationComponent.args = {
    isTablePagination: false,
    rowsPerPageOptions:[5, 10, 25, { label: 'All', value: -1 }],
    colSpan: 6,
    count: 20,
    rowsPerPage: 5,
    page: 5,
    boundaryCount: 1,
    color: "standard",
    defaultPage: 3,
    disabled: false,
    hideNextButton: false,
    hidePrevButton: false,
    shape: "circular",
    showFirstButton: false,
    showLastButton: false,
    siblingCount: 2,
    size: "medium",
    variant: "outlined",
    sx: {}
}
