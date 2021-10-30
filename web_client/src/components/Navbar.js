import React, {  useState } from 'react'
import { AppBar, Typography, Toolbar, Menu, MenuItem,IconButton } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons'
import { useUser } from '../store/provider/UserProvider';
import { logout } from '../store/actions/UserActions';
import { useHistory } from 'react-router-dom';
import { useNavbar } from '../Context/Navbar.context';
export default function Navbar() {
  const [userState,userDispatch] = useUser()
  const history = useHistory()
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    logout(userDispatch, history)
  }
  const [ toggleDrawer ] = useNavbar()
  return (
        <AppBar style={{height:'100%',justifyContent:'flex-start'}} position="static">
        <Toolbar style={{height:'70%'}}>
          <IconButton onClick={()=>{toggleDrawer(true)}} edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow:1}}>
          {userState.is_online  ? 'Online' : 'Offline'}
          </Typography>
          <Typography variant="h6">
          {`${userState?.lastname} ${userState?.firstname}`}
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem  onClick={handleClose}>My account</MenuItem>
                <MenuItem style={{color:"red"}}  onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    )
}
