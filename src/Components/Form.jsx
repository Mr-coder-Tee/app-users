import React,{useState} from 'react';
import { Formik,Form } from 'formik';
import TextField from './TextField';
import TextArea from './TextArea';
import * as Yup from 'yup';

const Forms = ({AddUser}) => {

    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [age,setAge]=useState('');
    const [dob,setDoB]=useState('');
    const [location,setLocation]=useState('');

    const submitUser=(e)=>{
        e.preventDefault();
        console.log("name",name);
        AddUser(name,surname,age,dob,location);
    }

    const validate=Yup.object({
        name:Yup.string().required("enter valid name"),
        surname:Yup.string().required("enter valid surname"),
        age:Yup.number().required("enter valid age"),
        dob:Yup.string().required("enter gender (Male or Famale)").matches(/^(Male)|(Female)$/,"Please enter a valid gender as Male or Female"),
        location:Yup.string().max(15,"enter valid location").required("Enter Location")
    })

    return ( 
        <div className="form-container">
            <Formik
                initialValues={{
                    name:'',
                    surname:'',
                    age:'',
                    dob:'',
                    location:''
                }}
                validationSchema={validate}
                onSubmit={values=>{
                    console.log("name",values.name);
                    AddUser(values.name,values.surname,values.age,values.dob,values.location);
                }}
                
            >
                {formik=> (
                    
                    <div className="form-card">
                        
                        <h2>User Form</h2>
                        {/* {console.log("formik",formik.values)} */}
                        <Form
                        >
                            
                            <div className="row">
                                <TextField label="Name" name="name" type="text"/>
                                <TextField label="Surname" name="surname" type="text"/>
                            </div>
                            <div className="row">
                                <TextField label="Age" name="age" type="text"/>
                                <TextField label="Gender" name="dob" type="text"/>
                            </div>
                            <div className="row">
                                <TextArea label="Type Location" name="location" type="text"/>
                            </div>
                            <div className="btnbx">
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </Form>  
                    </div>
                )}
            </Formik>
        </div> 
    
    );
}
 
export default Forms;