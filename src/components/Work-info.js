import React, { useState } from 'react'
import '../styles/work-info.css'

const WorkInfo = ({childToParent}) => {
    const [input, setInput] = useState({})

    const changeInput = ({target: {name, value}}) => {
        setInput({
            ...input,
            [name]:value
        })
        childToParent(name, value)
    }

    return (
        <div className='work-info'>
            <h1>Work experience</h1>
            <form className='work-form'>
            <input type='text' name='companyInput' onChange={changeInput} placeholder='previous company,'></input>
            <input type='text' name='positionInput' onChange={changeInput} placeholder='position occupied,'></input>
            <input type='text' name='workFromInput' onChange={changeInput} placeholder='from,'></input>
            <input type='text' name='workToInput' onChange={changeInput} placeholder='to'></input>            
            </form>              
            <button type='button' className='add-education'>Add more</button>
        </div>
    )
}

export default WorkInfo