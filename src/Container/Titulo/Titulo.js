import React from 'react'
import '../Titulo/Titulo.css'

const Titulo = ({text}) => {
    return (
        <div className="title">
            <label>{text}</label>
        </div>
    )
}

export default Titulo
