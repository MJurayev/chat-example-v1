import React, { useEffect } from 'react'
import { ListItem, Avatar, ListItemIcon,makeStyles,ListItemText, Badge, Box } from '@material-ui/core'
import { useUser } from '../store/provider/UserProvider'
import { useActiveChat } from '../store/provider/ActiveChatProvider'
import { selectChat } from '../store/actions/ActiveChatActions'
import { useMessages } from '../store/provider/MessageProvider'

export default function Sidebar() {
    const [userState] = useUser()
    const [activeChatState, activeChatDispatch] = useActiveChat()
    const [messagesState] = useMessages()

    const parentStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
    }
    useEffect(() => {
        console.log(messagesState)
    }, [messagesState])
    const unReadMessages = {
        backgroundColor:"#8e9be4",
        color:"white",
        width:"25px",
        height:"25px",
        borderRadius:"50%",
        fontWeight:600,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
    return (
        <div style={parentStyle}>
            {
                userState && (
                    userState?.contacts.length > 0 ?
                        <>
                            {
                                userState.contacts.map((user, key) => {
                                    const unRead = messagesState?.messages.filter(mes => (mes.from === user._id || mes.to === user._id ) && !mes.isRead  ? mes : "")
                                    if (user._id === userState._id) return ""
                                    return <ListItem onClick={() => selectChat(activeChatDispatch, user._id, "USER", messagesState?.messages)} key={key} selected={activeChatState.chat_id === user._id} button divider>

                                        <ListItemIcon>
                                            <Badge color="primary" invisible={!user?.online} overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot">
                                                <Avatar alt={`${user?.lastname} ${user?.firstname} `} src="/static/images/avatar/1.jpg" />
                                            </Badge>
                                        </ListItemIcon>

                                        <ListItemText primary={`${user?.lastname} ${user?.firstname} `} />
                                        <Box style={unReadMessages}>{unRead.length}</Box>
                                    </ListItem>
                                })

                            }
                        </> :
                        <>
                            Sizda hali Userlar yo'q
                        </>
                )
            }
        </div>
    )
}
