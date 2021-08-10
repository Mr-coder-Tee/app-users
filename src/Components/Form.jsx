import React from 'react';

const Form = () => {
    return ( 
        <div className="form-container">
            <div className="form-card">
                <h2>User Form</h2>
                <form >
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text"/>
                                <span className="text">Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text"/>
                                <span className="text">Surname</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text"/>
                                <span className="text">Age</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input className="input-size"  type="text"/>
                                <span className="text">DoB</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="inputbox textarea">
                            <textarea className="input-size"  type="text"/>
                            <span className="text">Type Location</span>
                            <span className="line"></span>
                        </div>
                    </div>                    
                </div>
                </form>
                <div className="btnbx">
                    <button className="btn">Submit</button>
                </div>
            </div>
        </div> 
    
    );
}
 
export default Form;