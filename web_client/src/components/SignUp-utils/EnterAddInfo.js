import {useState} from 'react'
import { Box,TextField, Button } from '@material-ui/core'
import { useUser } from '../../store/provider/UserProvider'
import { useSignUp } from '../../Context/SignUpContext'
import { userRegister } from '../../store/actions/UserActions'
import { useHistory } from 'react-router-dom'
export default function EnterAddInfo({setStep}) {
    const [ userState, userDispatch ] = useUser()
    const [ guestInfo, setGuestInfo ] = useSignUp()
    const history = useHistory()
    const [errors,setErrors] = useState({
        firstname:"",
        lastname:"",
        password:"",
        password_repeat:""
    })
    const handleChangeFirstName =(e)=>{
        setGuestInfo(function(info){
            return { ...info,firstname:e.target.value}
        })
    }
    const handleChangeLastName =(e)=>{
        setGuestInfo(function(info){
            return { ...info, lastname:e.target.value}
        })
    }
    const handleChangeRepeatPassword =(e)=>{
        setGuestInfo(function(info){
            return { ...info, password_repeat:e.target.value}
        })
    }

    const handleChangePassword =(e)=>{
        setGuestInfo(function(info){
            return { ...info, password:e.target.value}
        })
    }
    const handleSentUserInfo =()=>{
        userRegister(userDispatch, guestInfo, setStep,history)
        console.log(guestInfo)
        // setStep(x=>++x)
    }
    
        return (
            <>
                <Box  style={{fontSize:'24px', padding:"10px"}}>
                    Qo'shimcha ma'lumotlarni kiriting:
                </Box>
                <Box  style={{padding:'10px', width:"80%"}}>
                    <TextField  helperText={errors.firstname}  error={errors.firstname!==""} name="firstname" onChange={handleChangeFirstName}  defaultValue=" "  style={{width:"100%"}} size="small" id="firstname" label="Firstname" variant="outlined" />
                </Box>
                <Box  style={{padding:'10px', width:"80%"}}>
                    <TextField  helperText={errors.lastname}  error={errors.lastname!==""}  defaultValue="" onChange={handleChangeLastName} style={{width:"100%"}} size="small" id="lastname" label="Lastname" variant="outlined" />
                </Box>
                <Box  style={{padding:'10px', width:"80%"}}>
                    <TextField  helperText={errors.password}  error={errors.password!==""} type="password" defaultValue="" onChange={handleChangePassword}  style={{width:"100%"}} size="small" id="password" label="Password" variant="outlined" />
                </Box>
                <Box  style={{padding:'10px', width:"80%"}}>
                    <TextField  helperText={errors.password_repeat}  error={errors.password_repeat!==""} type="password" defaultValue="" onChange={handleChangeRepeatPassword} style={{width:"100%"}} size="small" id="repeat_password" label="Password (Retype)" variant="outlined" />
                </Box>
                <Button disabled={false} onClick={handleSentUserInfo} style={{ minWidth: '50%' , marginTop:"20px"}} variant="contained" color="primary">Get Verification Code</Button>
                         
            </>
        )
}
