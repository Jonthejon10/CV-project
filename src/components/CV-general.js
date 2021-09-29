/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from 'react'

const CVGeneral = (props) => {
    return (
        <div className='cv-general'>
            <h1>Personal information</h1>
            <h2>{props.name}</h2>

            <div className='logo-div'>
                <img src={require("../images/address.png").default}/>
                <p>{props.address}</p>
            </div>

            <div className='logo-div'>
                <img src={require("../images/email.png").default}/>
                <p>{props.email}</p>
            </div>

            <div className='logo-div'>
                <img src={require("../images/phone.png").default}/>
                <p>{props.phone}</p>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default CVGeneral