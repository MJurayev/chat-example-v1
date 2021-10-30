import React, { useEffect, useState } from 'react'
import { Box, Paper } from '@material-ui/core'
import { ContextMenu, ContextMenuTrigger, ContextMenuItem } from 'rctx-contextmenu'
import { Typography } from '@material-ui/core'
import Modal from './Common/Modal'
import { useActiveChat } from '../store/provider/ActiveChatProvider'
export default function MessageItem({message}) {
    const [ activeChatState ] = useActiveChat()
    const [sended, setSended] = useState(activeChatState.chat_id === message.to)
    useEffect(()=>{
        setSended(activeChatState.chat_id === message.to)
        return ()=>{
            
        }
    }, [activeChatState.chat_id, message.to])
    const containerStyle = {
        display:"flex", 
        width:"100%",
        justifyContent: sended ?  "flex-end" : 'flex-start'
    }
    const componentId = `compoennt_${message._id}`
    const paperStyle = {
        padding: "4px 6px",
        lineHeight:"10px",
        borderRadius: "7px",
        margin: "2px",
        marginLeft:sended ?  "auto" : '10px',
        marginRight:sended ? '10px':"auto",
        /* COLOR: WHITE; */
        fontSize: "12px",
        flexDirection:'column',
        fontWeight: 400,
        color: "#565656",
        fontFamily: 'Roboto',
        maxWidth:'60%',
        display:"flex",
        width:"fit-content",
        backgroundColor: sended ?  "rgb(119, 139, 253)" : '#efeff'
    }
    const messageStyle ={display:'flex', marginLeft:'auto' ,color:sended ? "blue" : '#6d6d6dde'}
    const [isOpen, setIsOpen] = useState(false)
    const deleteHandle =(id)=>{
        console.log(id)
    }
    const createdAt = ()=>{
        const time = new Date(message?.createdAt)
        return `${time.getHours()}:${time.getMinutes()}`
    }
    return (
        <>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} callback={()=>deleteHandle(message?._id)} />
                <Box style={containerStyle}>
                    <ContextMenuTrigger className="context-menu-display" id={componentId} >
                        <Paper  variant="outlined" style={paperStyle}>
                            <Typography >{message.text}</Typography>
                            <Box style={messageStyle}>
                                {createdAt}
                            </Box>
                        </Paper>
                        
                    </ContextMenuTrigger>
                </Box>

            <ContextMenu animation="fade" id={componentId}>
                <ContextMenuItem onClick={()=>{setIsOpen(true)}}>Delete</ContextMenuItem>
                <ContextMenuItem>Menu Item 2</ContextMenuItem>
                <ContextMenuItem>Menu Item 3</ContextMenuItem>
                <ContextMenuItem>Menu Item 4</ContextMenuItem>
            </ContextMenu>
        </>
        
    )
}
