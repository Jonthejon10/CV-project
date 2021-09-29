/* eslint-disable no-useless-constructor */
import React from 'react'

const CVEducation = (props) => {
    return (
        <div className='cv-education'>
            <h1>Education</h1>
            <h2>{props.school}, {props.city}</h2>
            <p>{props.degree}</p>
            <div className='education-dates'>
                <p>{props.from} - {props.to}</p>
            </div>
        </div>
    )
}

export default CVEducation