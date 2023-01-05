import Table from "./table";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultData, tableConstant, tableExpandFields } from "./constants";

export default {
    title: "CommonComponents/Table",
    component: Table,
    argTypes: {
        
    }
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const TableComponent = Template.bind({})

TableComponent.args = {
    cols: tableConstant(),
    expandCols: tableExpandFields,
    expandLabelKey: "workflow",
    data: defaultData,   
    onExpand: () => {},
    sx: {'& .MuiTableCell-head': {backgroundColor: "#f6f6f6",color: "#495057"}},
    isExpandable: true,
    isPagination: true 
}
