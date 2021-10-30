import {useState} from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import { VerifyPhone } from '../../store/actions/UserActions'
import { useSignUp } from '../../Context/SignUpContext'
export default function EnterCode({setStep}) {
    const [guestInfo, setGuestInfo] = useSignUp()
    const [error,setError] = useState("")
    const handleChangeCode=(e)=>{
        const valueCode = e.target.value
        setGuestInfo(function (info){
            return {...info, code:valueCode}
        })
    }
    const handleVerifyPhone = () => {
        VerifyPhone({phone:guestInfo?.phone, code:guestInfo?.code}, setStep)
    }
        return (
            <>
                        {/* {counter} */}
                <Box  style={{fontSize:'24px', padding:"10px"}}>
                Tasdiqlash kodini kiriting:
                </Box>
                    <Box style={{padding:'10px', width:"80%"}}>
                    <TextField  helperText={error}  error={error!==""} name="code" defaultValue="" onChange={handleChangeCode} style={{width:"100%"}} size="small" id="code" label="Code" variant="outlined" />
                </Box>
                <Button onClick={handleVerifyPhone} style={{ minWidth: '50%' , marginTop:"20px"}} variant="contained" color="primary">Get Verification Code</Button>
            </>
        )
}
