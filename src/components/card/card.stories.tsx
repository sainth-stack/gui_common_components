import Card from "./card";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EyeSVG,TrashSVG,CloudUploadSVG} from "../../assets/svg";
import Grid from "@mui/material/Grid";
import Button from "../button/button";
export default {
    title:'CommonComponents/Card',
    component:Card,
    argTypes:{
        variant:{
            options:['outlined'],
            control: { type: 'radio' },
        }
    }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Cardcomponent = Template.bind({});

Cardcomponent.args = {
    variant: "outlined",
    children: <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
      <Grid style={{
        width: '40px',
        height: '40px',
        border: '2px solid #495057',
        borderRadius: ' 50%',
        display: 'grid',
        placeItems: 'center'
      }}>V1</Grid>
      <Grid style={{
        width: '46px',
        height: 'auto',
        display: 'grid',
        placeItems: 'center',
        // backgroundImage: `url(${backGround})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}>
        V2
      </Grid>
    </Grid>,
    header: <h1 style={{ fontSize: '18px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Simulator case 1</h1>,
    sx: { '& .MuiBox-root': { backgroundColor: "white" }, width: '25%', height: '200px' },
    flip: true,
    footerIcons: <Grid columnSpacing={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '23px' }}>
      <Grid>
        {/* <Button size="medium" variant="contained" children="" startIcon={<EditSVG width={20} height={20} fill="white" />} /> */}
      </Grid>
      <Grid>
        <Button size="medium" variant="contained" children="" startIcon={<CloudUploadSVG width={20} height={20} fill="white" />} />
      </Grid>               <Grid >
        <Button size="medium" variant="contained" children="" startIcon={<TrashSVG width={20} height={20} />} />
      </Grid>
      <Grid>
        <Button size="medium" variant="contained" children="" startIcon={<EyeSVG width={20} height={20} fill="white" />} />
      </Grid>
    </Grid>,
    backContent: <Grid className='text-center' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '20%' }}>
      <Grid>Created At: 28-1-2023</Grid>
      <Grid>Modified By: 3insys</Grid>
    </Grid>
};
