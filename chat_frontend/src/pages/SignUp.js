import React, {    useState } from 'react'
import { Box,Stepper, StepLabel, Step} from '@material-ui/core'
import { useUser } from '../store/provider/UserProvider'
import { Link, Redirect } from 'react-router-dom'
import EnterPhone from '../components/SignUp-utils/EnterPhone'
import EnterCode from '../components/SignUp-utils/EnterCode'
import EnterAddInfo from '../components/SignUp-utils/EnterAddInfo'
import SignUpContext from '../Context/SignUpContext'

export default function SignUp() {
    const [state] = useUser()
    const [ step, setStep] = useState(0)
    const getSteps =() => {
        return ["Enter phone number", "Enter veritification code", "Enter additional info"]
    }
    const steps = getSteps();

    return (
        <SignUpContext>
            <Box style={{ maxWidth: "600px", padding: "20px", width: "100%",  margin: '0 auto', display: 'flex', alignItems: 'center', flexDirection:'column' }} component="div">
            {
                !state.authenticated ? 
                    <>
                    <Stepper activeStep={step}>
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        
                        return (
                            <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                    {step ===0 ? <EnterPhone setStep = {setStep} /> : 
                    step === 1 ? <EnterCode setStep={setStep}/> :
                    step === 2 ? <EnterAddInfo setStep={setStep}/> : 
                    <>
                    <Link to="/" >Bosh sahifaga </Link>
                    </>}
                    {/* <Box  style={{padding:'10px', width:"80%"}}>
                        <TextField onChange={handleChangePassword} type="password" ref={passwordRef} style={{width:"100%"}} size="small" id="password" label="Password" variant="outlined" />
                    </Box> */}
                    
                </> : <Redirect to="/"/>
            }
            </Box>
        </SignUpContext>
    )
}
