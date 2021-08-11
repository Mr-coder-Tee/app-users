import React from 'react';
import IsEmpty from './IsEmptyComponent';

const UserList = ({users}) => {
    const length=users.length;

  

    return ( 
        <div className="userlist-container">
            <div className="heading">
                <h3>Registered Users</h3>
                
            </div>
            <div>
                {length===0 ?
                    <IsEmpty/>
                :
                    <ul>
                        {users.map(action=><li key={action.uid}>{action.uid+1}{". "}{action._name}<i class="fa fa-chevron-right" /></li>)}
                    </ul>
                }
            </div>
        </div>
     );
}
 
// <ul>
//                 <li>user1 <i class="fa fa-chevron-right" /></li>
//             </ul>
export default UserList;