import React from 'react';
import {DivInput} from './styles'


function FormField({type, placeholder,onChange, name, label}){
    const tag = type;
       
    return(
        <DivInput> 
            {tag === 'textarea'?
                < textarea
                        name={name} 
                        placeholder = {placeholder}
                        onChange ={onChange}
                        required
                />:
                < input
                    name={name}
                    type={type} 
                    placeholder = {placeholder}
                    onChange ={onChange}
                    required
                />
            }
            <label for={name}>{label}</label>
        </DivInput>
    );

};

export default FormField;