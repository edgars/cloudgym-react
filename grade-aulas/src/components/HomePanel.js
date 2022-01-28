import { Panel } from 'primereact/panel';
import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataTableBasicDemo } from './DataTableBasicDemo';


function HomePanel() {

return  (


<Panel header="Cloud Gym ">
    <p> <DataTableBasicDemo/></p>
</Panel>

)


}

export default HomePanel