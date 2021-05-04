/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import UserContext from '../../context/User/UserContext';

function UsersList() {
  const { getUsers, users , getProfile} = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ul className="list-group h100">
        {
            users?.map(user => (
                <li key={user.id} className='list-group-item list-group-item-action d-flex justify-content-start align-items-center' onClick={() => getProfile(user.id)}>
                    <img src={user.avatar} className='img-fluid mr-4 roun rounded-circle' width='70' alt='user avatar'/>
                    <p>{user.first_name} {user.last_name}</p>
                
                </li>
            ))
        }
    </ul>
  );
}

export default UsersList;
