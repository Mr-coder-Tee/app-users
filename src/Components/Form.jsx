import React,{useState} from 'react';

const Form = ({AddUser}) => {

    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [age,setAge]=useState('');
    const [dob,setDoB]=useState('');
    const [location,setLocation]=useState('');

    const submitUser=(e)=>{
        e.preventDefault();
        AddUser(name,surname,age,dob,location);
    }
    return ( 
        <div className="form-container">
            <div className="form-card">
                <h2>User Form</h2>
                <form onSubmit={submitUser}>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                                <span className="text">Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text" value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                                <span className="text">Surname</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
                                <span className="text">Age</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text" value={dob} onChange={(e)=>setDoB(e.target.value)}/>
                                <span className="text">DoB</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="inputbox textarea">
                            <textarea className="input-size"  type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                            <span className="text">Type Location</span>
                            <span className="line"></span>
                        </div>
                    </div>                    
                </div>
                    <div className="btnbx">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
                
            </div>
        </div> 
    
    );
}
 
export default Form;