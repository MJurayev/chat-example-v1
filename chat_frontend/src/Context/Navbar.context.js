import React, { createContext, useContext, useState } from 'react'
import { ListItem,List, Drawer,Divider,ListItemIcon, ListItemText, Switch ,Typography} from '@material-ui/core';
import { SettingsOutlined,InfoOutlined,NightsStayOutlined, ContactsOutlined } from '@material-ui/icons';
import { useUser } from '../store/provider/UserProvider';
const Context = createContext()

export default function NavbarContext({children}) {
    const [open, setOpen] = useState(false)
    const [userState] = useUser()
    const list = () => (
        <div
        style={{width:240}}
        role="presentation"
        // onClick={toggleDrawer( false)}
        onKeyDown={toggleDrawer(false)}
        >
            
            <List>
                <ListItem div style={{display:"flex", alignItems:"flex-start",flexDirection:"column"}}>
                    <Typography>
                        {`${userState?.lastname}  ${userState?.firstname}`}
                    </Typography>
                    <ListItemText primary={userState?.phone} />
                </ListItem>
            </List>
            <Divider />
           
                
            <List >
                <ListItem button>
                    <ListItemIcon>
                        <ContactsOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="Contacts" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                        <NightsStayOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="Night Mode" />
                    <Switch color="primary" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InfoOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>

{/* 
            <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Start"
          labelPlacement="start"
        /> */}

            
                
        </div>);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        } 
        setOpen(open)
      };
    return (
        <>
            <div>
                <React.Fragment >
                    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                        {list()}
                    </Drawer>
                </React.Fragment>
            </div>
            <Context.Provider value ={{setOpen}}>
                <Context.Consumer>
                    {
                        ()=>children
                    }
                </Context.Consumer>
            </Context.Provider>
        </>
    )
}
export const useNavbar =()=>{
    const { setOpen} = useContext(Context)
    return [setOpen]
}