import TabPanel from "./tabpanel";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title:'CommonComponents/Tabpanel',
    component:TabPanel,
    argTypes:{
        variant:{
            options:['scrollable','standard'],
            control: { type: 'radio' },
        },
    }

} as ComponentMeta<typeof TabPanel>
const tabsdata=[
    {name:'Tab1',id:1},
    {name:'Tab2',id:2},
    {name:'Tab3',id:3},
    {name:'Tab4',id:4},
    {name:'Tab5',id:5},
    {name:'Tab6',id:6},
    {name:'Tab7',id:7},
    {name:'Tab8',id:8},
    {name:'Tab9',id:9}
  
  ]
const Template: ComponentStory<typeof TabPanel> = (args) => <TabPanel {...args} />

export const TabPanelcomponent = Template.bind({});

TabPanelcomponent.args = {
    variant: "standard",
    tabs:tabsdata,
    sx:{}
};
