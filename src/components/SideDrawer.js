import React from "react";

import {Drawer, List, ListItem } from '@mui/material'

const SideDrawer = (props) => {
 
    return (
        <Drawer
         anchor="right"
         open={true}
        >
         <List component="nav">
           <ListItem button onClick={()=> alert('click')}>
             Name of item
           </ListItem>
         </List>
        </Drawer>
    )

}

export default SideDrawer;