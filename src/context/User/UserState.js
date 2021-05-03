import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from "axios";

function UserState({children}){
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        const users = await axios.get('https://reqres.in/api/users')
    }

    const getProfile = async (id) => {
        const profile = await axios.get(`https://reqres.in/api/users/${id}`)
    }

    return(
        <UserContext.Provider value={{
            user: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile

        }}>
            {children}
        </UserContext.Provider>
    )
}


