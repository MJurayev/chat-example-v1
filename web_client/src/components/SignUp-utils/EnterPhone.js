import {useState} from 'react'
import { sendSMSToPhone } from '../../store/actions/UserActions'
import { Box, TextField,Button } from '@material-ui/core'
import { useUser } from '../../store/provider/UserProvider'
import { useSignUp } from '../../Context/SignUpContext'
export default function EnterPhone ({setStep}){
    const [ guestInfo, setGuestInfo] = useSignUp()
    const [error, setError] = useState("")
    const [ userDispatch] = useUser(true)
    const handleChangePhone =(e)=>{
        const valuePhone = e.target.value
        setGuestInfo(function (info){
            return {...info, phone:valuePhone}
        })
    }
    const handleSubmit =()=>{
        sendSMSToPhone(userDispatch ,guestInfo?.phone, setStep)
        console.log("handleSubmit Info")
    }
    return (
    <>
        <Box  style={{fontSize:'24px', padding:"10px"}}>
            SignUp
        </Box>
        <Box  style={{padding:'10px', width:"80%"}}>
            <TextField helperText={error} error={error!==""} name="phone"   onChange={handleChangePhone} defaultValue="" style={{width:"100%"}} size="small" id="phone" label="Phone" variant="outlined" />
        </Box> 
        <Button onClick={handleSubmit} style={{ minWidth: '50%' , marginTop:"20px"}} variant="contained" color="primary">Get Verification Code</Button>
    </>
    )
}