import {GET_PROFILE, GET_USERS} from '../types';

export default function UserReducer (state, {payload, type}){

    switch(type){
        case GET_USERS:
            console.log(payload)
            return {
                ...state,
                users: payload
            }
            
        
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }

        default:
            return state;
    }
}

