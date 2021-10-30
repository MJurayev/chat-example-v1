import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { useUser } from '../store/provider/UserProvider'
import { userLogin } from '../store/actions/UserActions'
import { Redirect, useHistory } from 'react-router-dom'
export default function Login() {
    const [state, dispatch] = useUser()
    const history = useHistory()
    const passwordRef = useRef()
    const phoneRef = useRef()
    const [info, setInfo] = useState({ password:"", phone:"" })
    const handleChangePhone =(e)=>{
        setInfo(function(info){
            return { ...info, ...{phone:e.target.value}}
        })
    }
    const handleChangePassword =(e)=>{
        setInfo(function(info){
            return { ...info, ...{password:e.target.value}}
        })
    }
    const handleSubmit =()=>{
        userLogin(dispatch,info, history)
    }
    useEffect(()=>{
        console.log(state)
    }, [state])
    return (
        <Box style={{ maxWidth: "600px", padding: "20px", width: "100%",  margin: 'auto', display: 'flex', alignItems: 'center', flexDirection:'column' }} component="div">
            {
                state.authenticated ? <Redirect to="/" /> : 
                <>
                <Box  style={{fontSize:'24px', padding:"10px"}}>
                Login
                </Box>
                <Box  style={{padding:'10px', width:"80%"}}>
                    <TextField onChange={handleChangePhone} ref={phoneRef} style={{width:"100%"}} size="small" id="phone" label="Phone" variant="outlined" />
                </Box>
                <Box  style={{padding:'10px', width:"80%"}}>
                    <TextField onChange={handleChangePassword} type="password" ref={passwordRef} style={{width:"100%"}} size="small" id="password" label="Password" variant="outlined" />
                </Box>
                <Button onClick={handleSubmit} style={{ minWidth: '50%' , marginTop:"20px"}} variant="contained" color="primary">Get Verification Code</Button>
                </> 
            }
        </Box>
    )
}
