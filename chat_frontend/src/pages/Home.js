import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useUser } from '../store/provider/UserProvider'
export default function Home() {
    
    const [userState] = useUser()
    return (
        <div>
                <>
                { userState?.authenticated ?  <Redirect to="/chat" /> : "" }
                <Link to="/login" >Login </Link>
                <Link to="/sign-up" >SignUp </Link>
                <Link to="/chat" >Chat </Link>
                </>
        </div>
    )
}
