import React from 'react';
import IsEmpty from './IsEmptyComponent';
import { Link,BrowserRouter } from 'react-router-dom';

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
                        {users.map(action=><li key={action.uid}><a href="/userinfo">{action.uid+1}{". "}{action._name}<i class="fa fa-chevron-right"></i></a></li>)}
                    </ul>
                }
            </div>
        </div>
     );
}
 
{/* <BrowserRouter>
                            {users.map(action=><Link className="Link" to="/userinfo"><li key={action.uid}>{action.uid+1}{". "}{action._name}<i class="fa fa-chevron-right"></i></li></Link>)}
                        </BrowserRouter> */}
export default UserList;