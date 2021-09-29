/* eslint-disable no-useless-constructor */
import React, { useState } from 'react'
import '../styles/general-info.css'

const GeneralInfo = ({childToParent}) => {
    const [input, setInput] = useState({})

    const changeInput = ({target: {name, value}}) => {
        setInput({
            ...input,
            [name]:value
        })
        childToParent(name, value)
    }

    return (
        <div className='general-info'>
            <h1>General</h1>
            <form className='general-form'>
                <input type='text' name='nameInput' onChange={changeInput} placeholder='name,'></input>
                <input type='text' name='addressInput' onChange={changeInput} placeholder='address,'></input>
                <input type='text' name='emailInput' onChange={changeInput} placeholder='email,'></input>
                <input type='text' name='phoneInput' onChange={changeInput} placeholder='phone number,'></input>
                <input type='text' name='descriptionInput' onChange={changeInput} className='description' placeholder='tell us a little bit about you'></input> 
            </form>
        </div>
        )
}

export default GeneralInfo