import React from 'react';
import IsEmpty from './IsEmptyComponent';
import { Link,BrowserRouter } from 'react-router-dom';

const UserList = ({users,getIndex}) => {
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
                            {users.map(action=><li  key={action.uid} onClick={()=>getIndex(action.uid)}><Link key={action.uid} className="Link" to="/userinfo" >{action.uid+1}{". "}{action._name}<i class="fa fa-chevron-right"></i></Link></li>)}
                    </ul>
                }
            </div>
        </div>
     );
}
 
{/*
     <BrowserRouter>
                            {users.map(action=><li  key={action.uid} onClick={()=>getIndex(action.uid)}><Link key={action.uid} className="Link" to="/userinfo" >{action.uid+1}{". "}{action._name}<i class="fa fa-chevron-right"></i></Link></li>)}
                        </BrowserRouter> 


                            {users.map(action=><li key={action.uid}><a  onClick={()=>getIndex(action.uid)}>{action.uid+1}{". "}{action._name}<i class="fa fa-chevron-right"></i> </a></li>)}


    58:57    
*/}
export default UserList;