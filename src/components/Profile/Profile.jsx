import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";

function Profile(){
    
    const { selectedUser } = useContext(UserContext)

    return(
        <>
        { selectedUser ? 
            <div className='card card-body text-center'>
                <img className='card-img-top rounded-circle m-auto img-fluid' src={selectedUser.avatar} alt="selected user avatar" style={{width: 180}}/>
                <p>{selectedUser.first_name} {selectedUser.last_name}</p>
                <p>email: {selectedUser.email}</p>
            </div>
            :
            <h2>No user selected</h2>
        }
        </>
    )
}

export default Profile;