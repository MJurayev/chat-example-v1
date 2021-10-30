import React, { useEffect, useRef , useState } from 'react'
import { Box ,Button } from '@material-ui/core'
import { useActiveChat } from '../store/provider/ActiveChatProvider'
import MessageItem from './MessageItem'
import socket from '../services/socket'
import { useUser } from '../store/provider/UserProvider'
import { useMessages } from '../store/provider/MessageProvider'
import { Telegram } from '@material-ui/icons'
export default function ChatArea() {
    const [ activeChatState ] = useActiveChat()
    const textRef = useRef()
    const [userState] = useUser()
    const [ messageState ] = useMessages()

    const [isValid, setIsValid] = useState(false)

    const sendMessageAnotherUser =()=>{
        const message = {
            from:userState?._id,
            to:activeChatState?.chat_id,
            text:textRef.current.value,
        }
        socket.emit('send_message_request_to_server', message)
        textRef.current.value =""
    }
    const handleTextChange=(e)=>{
        if(e.target.value==="")setIsValid(false)
        else setIsValid(true)
    }
    const handleKeyPress =(e) => {
        if(e.which ===13 && isValid)sendMessageAnotherUser()
        
        if(e.target.value==="")setIsValid(false)
        else setIsValid(true)
        
    }
    const chatArea = document.querySelector('#chatArea')
    useEffect(()=>{
        chatArea?.scrollTo({top:chatArea?.scrollHeight, behavior:"auto"})
    }, [activeChatState, chatArea])
    useEffect(()=>{
        chatArea?.scrollTo({top:chatArea.scrollHeight, behavior: 'smooth'});
    }, [messageState,chatArea])
    const messagesFiltered = messageState.messages.filter(mes => 
        mes.from === activeChatState.chat_id || mes.to === activeChatState.chat_id ? mes : '')
    return (
        <Box style={{height:'100%',display:'flex',position:"relative", flexDirection:'column'}}>

            {
                ( activeChatState.chat_id && activeChatState.chat_type!== "NONE") ? 
                <>
                    <Box id="chatArea" style={{padding:'3px',maxHeight:'93%', height:'93%', overflowY:'scroll', overflowX:"hidden"}}>
                            {
                                
                                    messagesFiltered.length <= 0 ?  
                                <>No messages found</>
                                :
                                <>{
                                    messagesFiltered.map((mes, key) => {
                                        return <MessageItem key={key} message={mes} sended={activeChatState.chat_id===mes.to}/>
                                    })  
                                }</>
                            }
                    </Box>
                    <Box style={{height:'38px', minHeight:'25px', display:'flex', borderTop:'1px solid rgba(0, 0, 0, 0.54)'}}>
                        <Button color="primary"></Button>
                        <input onChange={handleTextChange} onKeyPress={handleKeyPress} ref={textRef} placeholder="Write message here..."  style={{fontSize:"16px", width:"100%", outline:"none", border:"none"}}/>
                        <Button color="primary" disabled={!isValid} onClick={sendMessageAnotherUser}> <Telegram/> </Button>
                    </Box>
                </> 
                :
                <> SIZDA CHATLAR YO'Q</>
            }
        </Box>
    )
}
