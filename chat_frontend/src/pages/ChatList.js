import { Container,Box, Grid, Paper } from '@material-ui/core'
import Sidebar from '../components/Sidebar'
import ChatArea from '../components/ChatArea'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { getAllMessages } from '../store/actions/MessageActions'
import { useMessages } from '../store/provider/MessageProvider'
import { useUser } from '../store/provider/UserProvider'
import { Redirect } from 'react-router-dom'
import * as userActions from '../store/constants/User'
import socket, {  onHostOnline } from '../services/socket'
export default function ChatList() {
    const [ userState, userDispatch ] = useUser()

    const { _id } = userState
    useEffect(()=>{
        onHostOnline(_id)
        
    }, [_id])
    useEffect(()=>{
        socket.on('user_set_online_status', online_state => {
            userDispatch({type:userActions.USER_SET_IS_ONLINE, payload:{is_online:online_state}})
        })
        socket.on('contacts_chats_is_online', info => {
            console.log(info?.online_state, info.user_id)
            // userDispatch({type:userActions.USER_SET_IS_ONLINE, payload:{is_online:online_state}})
        })
    }, [ _id,userDispatch])
    const [ messageDispatch] = useMessages(true)
    useEffect(()=>{
        getAllMessages(messageDispatch)
    },[messageDispatch])

    const sideBarGridStyle = {
        height:"100%", 
        paddingRight:'0',
    }
    return (
        <>
        { !userState?.authenticated ?  <Redirect to="/" /> : "" }
        <Container style={{height:"100vh", padding:"0", width:'100%', display:"flex", flexDirection:"column"}}>
            
            <Box style={{height:'8%'}}>
                <Navbar /> 
            </Box>
            <Grid style={{height:"92%", width: "100%"}} container spacing={1}>
                <Grid style={sideBarGridStyle} item xs={3}>
                    <Paper style={{height:"100%", marginTop:'5px',borderTopRightRadius:'0px',borderBottomRightRadius:'0px'}}>
                        <Sidebar />
                    </Paper>
                </Grid>
                <Grid item style={{paddingLeft:"3px", display: "flex", width: "100%",height: "100%"}} xs={9}>
                    <Paper style={{height:"100%", marginTop:'5px',borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px', width: "100%"}}>
                            <ChatArea />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
