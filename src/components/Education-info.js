/* eslint-disable no-useless-constructor */
import React, { useState } from 'react'
import '../styles/education-info.css'

const EducationInfo = ({childToParent}) => {
    const [input, setInput] = useState({})

    const changeInput = ({target: {name, value}}) => {
        setInput({
            ...input,
            [name]:value
        })
        childToParent(name, value)
    }

    return (
        <div className = 'education-info'>
            <h1>Education</h1>
            <form className='education-form'>
                <input type='text' name='schoolInput' value={input.schoolInput} onChange={changeInput} placeholder='school attended,'></input>
                <input type='text' name='cityInput' onChange={changeInput} placeholder='city,'></input>
                <input type='text' name='degreeInput'  onChange={changeInput} placeholder='degree,'></input>
                <input type='text' name='fromInput' onChange={changeInput} placeholder='from,'></input>
                <input type='text' name='toInput' onChange={changeInput} placeholder='to'></input>
             </form>
            <button type='button' className='add-education'>Add more</button>
        </div>
    )
    
}

export default EducationInfo