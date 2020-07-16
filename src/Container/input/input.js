import React from 'react'
import '../input/input.css';

const input = ({attribute, handleChange, param}) => {
    return (
        <div className='input-container'>
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={ (e) => handleChange(e.target.name, e.target.value)}
            className={ param ? 'input-error' : 'regular-Style'}                                                
            />
        </div>
    )
}

export default input
