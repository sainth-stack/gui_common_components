import React from "react";
import Accordian from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MdOutlineBusiness } from 'react-icons/md';
import cloud from '../../assets/svg/cloud.svg'
import { BusinessSVG } from "../../assets/svg";
export default {
    title: 'CommonComponents/Accordian',
    component: Accordian,
} as ComponentMeta<typeof Accordian>

const data= {
    startIcon: <BusinessSVG />,
    accordianId: "$Integrator",
    accordianLabel: {
        title: "Advanced Integration Manager",
        subtitle: "Create/View Integration Manager"
    },
    _links: [
        {
            name: "Process Definitions",
            url: "/process-definitions",
            shouldOpenNewTab: false
        },
        {
            name: "Process Instances",
            url: "/process-instances"
        },
        {
            name: "API Integrator"
        },
        {
            name: "Microservice Integrator"
        }
    ]
}
const Template: ComponentStory<typeof Accordian> = (args) => <Accordian {...args} />
export const AcoordianComponent = Template.bind({});
        AcoordianComponent.args = {
            startIcon:data.startIcon,
            accordianId:data.accordianId,
            accordianLabel:data?.accordianLabel,
            sx:{
                backgroundColor:""
            },
            children: <ul>
            {
                data?._links?.map((link,index) => <li key={index}>
                    {
                        link?.shouldOpenNewTab ? <td onClick={()=> window.open(link.url, "_blank")}>{link?.name}</td> : <div >
                        {link?.name}
                    </div>
                    }
                </li>)
            }
        </ul>
        };






