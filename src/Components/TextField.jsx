import { ErrorMessage,useField } from 'formik';
import React from 'react';

const TextField = ({label,...props}) => {
    const [field,meta]=useField(props);
    return ( 
        <div className="col">
            <div className="inputbox">
                <input className={`input-size ${meta.touched && meta.error && 'is-invalid'}` }
                    {...field}{...props}
                    autoComplete="off"
                    required="required"
                />
                <span className="text">{label}</span>
                <span className="line"></span>
            </div>
            <ErrorMessage name={field.name} component="div" className="error"/>
        </div>
     );
}
 
export default TextField;