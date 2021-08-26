import * as userActions from '../constants/User'

export const UserInitialState = {
    _id:"",
    phone:"",
    username:"",
    surname:"",
    firstname:"",
    isVerified:false, // sign up state
    authenticated:false,
    is_online:null,
    errorMessage:null,
    isLoading:false,
    
    contacts:[], // contacts kontaktga qo;shilganlar
}


export const UserReducer =(state, action)=>{
    switch(action.type){
        // case userActions.USER_LOGIN: return { ...state,...{authenticated:action.payload} }
        case userActions.USER_ADD_VERYTIFICATION_ID: return {...state, ...action.payload}
        case userActions.USER_GET_CONTACTS_TO_STATE:return { ...state, ...{contacts:action.payload}}
        case userActions.USER_SET_IS_AUTHENTICATED:return { ...state, ...{authenticated:action.payload} }
        case userActions.USER_CHECK_BY_TOKEN:return {...state, ...action.payload}
        case userActions.USER_SET_IS_ONLINE:return {...state, ...action.payload}
        case userActions.USER_LOGOUT:return {...UserInitialState}
        
        

        default: return {...state}
    }
    
}