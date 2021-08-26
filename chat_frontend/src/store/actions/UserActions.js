import * as userActions from '../constants/User'
import { axios } from '../../services/axios'
export const userLogin =(dispatch, info, history) =>{
    axios.post('/auth/login', {
        phone:info.phone,
        password:info.password
    }).then(res =>{
        window.localStorage.setItem('x-auth-token', res.data.token)
        CheckUser(dispatch)
        history.push('/')
        
    }).catch(err => {
        console.log(err)
    })
   
}

export const sendSMSToPhone =(dispatch, phone, setStep) => {
    console.log('Pre request phone', phone)
    axios.post('/auth/request-send-sms', {
        phone:phone
    }).then(res =>{
        dispatch({type:userActions.USER_ADD_VERYTIFICATION_ID, payload:{ verify_id: res.data._id, expires_veritification:res.data.expiry}})
        setStep(x=>++x)

    }).catch(err => {
        console.log(err)
    })
}

export const VerifyPhone =(info, setStep) => {
    axios.post('/auth/confirm', {
        phone:info.phone,
        code:info.code
    }).then(res =>{
        setStep(x=>++x)
    }).catch(err => {
        console.log(err)
    })
}
export const CheckUser = (dispatch)=>{
    axios.get('/auth/check-user', {
        headers:{
            'x-auth-token':window.localStorage.getItem('x-auth-token')
        }
    }).then((res)=>{
        dispatch({type:userActions.USER_CHECK_BY_TOKEN, payload:res.data})
        dispatch({type:userActions.USER_SET_IS_AUTHENTICATED, payload:true})
        console.log('Auth suceeded')
        // history.push('/')
    })
    .catch(err => {
        dispatch({type:userActions.USER_SET_IS_AUTHENTICATED, payload:false})  
        dispatch({type:userActions.USER_LOGOUT}) 
        console.log(err)
        // history.push('/login')
    })
}

export const GetContactsUser = (dispatch, userState) => {
    axios.get('/users' )
    .then(res => {
        dispatch({type:userActions.USER_GET_CONTACTS_TO_STATE, payload:res.data})
    })  
    .catch(error => {
        console.log(error)
    })
}

export const logout=(dispatch, history)=>{
    window.localStorage.removeItem('x-auth-token')
    window.localStorage.removeItem('current_chat_id')
    window.localStorage.removeItem('current_chat_type')
    dispatch({type:userActions.USER_LOGOUT})
    history.push('/')
}


export const userRegister =(dispatch, user, setStep, history)=>{
    const bodySearch = {
        phone:user?.phone,
        lastname:user?.lastname,
        firstname:user?.firstname,
        password:user?.password
    }
    axios.post('/auth/sign-up',bodySearch).then(res => {
        setStep(x=>++x)
        userLogin(dispatch,{phone:user?.phone, password:user?.password}, history)
    }).catch(err => {
        console.log(err)
    })
}
// export const selectChat=(dispatch, {chat_id,chat_type}, state) =>{
    // dispatch({type:userActions.USER_SELECT_CHAT, })
// }