import React from 'react'
import '../label/label.css'

const LabelContainer = ({ text }) => {
    return (
        <div>
            <label> {text} </label>
        </div>
    )
}

export default LabelContainer

