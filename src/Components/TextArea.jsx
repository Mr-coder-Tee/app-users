import React from 'react';
import { ErrorMessage,useField } from 'formik';

const TextArea = ({label,...props}) => {
    const [field,meta]=useField(props);
    return ( 
        <div className="col">
            <div className="inputbox textarea">
                <textarea className="input-size"  
                 {...field}{...props}
                 autoComplete="off" 
                 required="required"/>
                <span className="text">{label}</span>
                <span className="line"></span>
            </div>
            <ErrorMessage name={field.name} component="div" className="error"/>
        </div> 
     );
}
 
export default TextArea;