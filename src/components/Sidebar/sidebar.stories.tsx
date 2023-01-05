import Sidebar from "./sidebar";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";
import {BiHomeAlt} from "react-icons/bi";
import {BusinessSVG, AlertSVG,  TasksSVG, AdaptersSVG, LogAndEventManagement, OperationalDataStore} from "../../assets/svg/index";
export default {
    title:'CommonComponents/Sidebar',
    component:Sidebar,
    argTypes:{
        variant:{
            options:['permanent'],
            control: { type: 'radio' },
        },
        anchor:{
            options:['left'],
            control: { type: 'radio' },
        }
    }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

interface UrlLink{
    id : string,
    label ?: string,
    url ?: string,
    isSubLinks ?: boolean,
    sublinks ?:  Array<UrlLink>, 
    shouldOpenNewTab ?: boolean
  }
  export interface NavLink extends UrlLink{
    icon ?: React.ReactNode,
    navigate ?: () => void  
  }
  const _dashboardLinks : Array<NavLink> = [
    {
        id : "$home",
        icon : <BiHomeAlt size={25} />,
        label : "Home",
        url : "/dashboard"
    },
    {
        id : "$aim",
        icon : <BusinessSVG/>,
        label : "Advanced Integration Manager",
        isSubLinks : true,
        sublinks : [
            { id : "$process-integrator",
              label : "Process Integrator",
              isSubLinks : true,
              sublinks : [
                {id : "$process-definitions", label : "Process Definitions", url : "/process-definitions"},
                // {id : "$"+PROCESS_INSTANCES, label : "Process Instances", url : "/"+PROCESS_INSTANCES},                
              ] 
            },
            {id : "$api-integrator", label : "API Integrator", url : "/api-integrator"},
            {id : "$micro-integrator", label : "Microservice Integrator", url : "/microservice-integrator"},
        ]
    },
    {
        id : "$tasks",
        icon : <TasksSVG/>,
        label : "Tasks",
        isSubLinks : true,
        sublinks : [
            {id : "$create-new-task", label : "Create New Task", url : "/create-new-tasks"},
            {id : "$view-tasks", label : "View Tasks", url : "/view-tasks"},
        ]
    },
    {
        id : "$adapt",
        icon : <AdaptersSVG/>,
        label : "Adapters",
        isSubLinks : true,
        sublinks : [
            { id : "$configure-adapters", label : "Configure Adapters", url : "/configure-adapters"},
            { id : "$view-adapters", label : "View Adapters", url : "/view-adapters"},
        ]
    },
    {
        id : "$alert",
        icon : <AlertSVG/>,
        label : "Alerts",
        isSubLinks : true,
        sublinks : [
            { id : "$create-new-alert", label : "Create New Alert", url : "/create-new-alert"},
            { id : "$manage-alerts", label : "Manage Alerts", url : "/manage-alerts"},
        ]
    },
    {
        id : "$logAndEventManagement",
        icon : <LogAndEventManagement/>,
        label : "Log and Event Management",
        isSubLinks : true,
        sublinks : [
            { id : "$view-instace-logs", label : "View Instance Logs",},
            { id : "$view-system-logs", label : "View System Logs", },
            // url : conf.logs.opensearch,shouldOpenNewTab: true
        ]
    },
    {
        id : "$operationalDatStore",
        icon : <OperationalDataStore/>,
        label : "Operational Data Store",
        isSubLinks : true,
        sublinks : [
            { id : "$create-data-model", label : "Create Data Model", url : "/createdatamodel"},
            { id : "$view-data-model", label : "View Data Model", url : "/viewdatamodel"},
        ]
    }
  ]

export const Sidebarcomponent = Template.bind({});

Sidebarcomponent.args = {
    variant: "permanent",
    anchor: "left",
    sidedata : _dashboardLinks,
    sx: {'& .MuiTypography-root': {backgroundColor: "white"}},
    drawerWidth:300,
    appbar:true,
    drawerheader:true
};
