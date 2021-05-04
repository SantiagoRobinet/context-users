import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from "axios";
import { GET_PROFILE, GET_USERS } from "../types";

function UserState({children}){
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        const usersList = await axios.get('https://reqres.in/api/users');
        dispatch({
            type: GET_USERS,
            payload: usersList.data.data 
        })
    }

    const getProfile = async (id) => {
        const profile = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log(`user id ${id}`)
        dispatch({
            type: GET_PROFILE,
            payload: profile.data.data
        })

    }

    return(
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile

        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;


