import  Breadcrumb from "./breadcrumb";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeIcon from "@mui/icons-material/Home";

export default {
    title:'CommonComponents/Breadcrumb',
    component:Breadcrumb,
    argTypes:{
        separator:{
            options:['<','>','-','/','|','?'],
            control: { type: 'radio'},
        },  
    }
} as ComponentMeta<typeof Breadcrumb>
 const Breadcrumbdata=[
    {name:'Home',startIcon: <HomeIcon  fontSize="inherit" />},
    {name:'Pages',startIcon:<HomeIcon  fontSize="inherit" />},
    {name:'Component',startIcon:<HomeIcon  fontSize="inherit" />} 
  ]

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />

export const Breadcrumbcomponent = Template.bind({});

Breadcrumbcomponent.args = {
    fontSize:12,
    fontWeight:400,
    breaddata:Breadcrumbdata,
    startIcon: false,
    endIcon:false,
    separableicon:true ,
    sx:{'& 	.MuiBreadcrumbs-separator':{
    }},
};

