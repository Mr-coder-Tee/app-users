import React from 'react';
import pro from '../images/profile.png'

const UserInfo = ({users}) => {
    return ( 
        <div className="info-container">
                <div className="card">
                    <div className="imgbx">
                        <img src={pro} alt="" />
                    </div>
                    <div className="content">
                        <div>
                            <h3>{users._name}</h3>
                            <p>Hi <strong>{users._surname}{" "}{users._name}</strong> welcome to the App thank you for registering with us, we see you are <strong>{users._age}</strong> years old and from <strong>{users._location}</strong></p> 
                        </div>
                    </div>
                </div>
        </div> 
    );
}
 

{/* */}
export default UserInfo;