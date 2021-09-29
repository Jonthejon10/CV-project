/* eslint-disable no-useless-constructor */
import React from 'react'

const CVWork = (props) => {
    
    return (
        <div className='cv-work'>
            <h1>Work experience</h1>
            <h2>{props.company}</h2>
            <p>{props.position}</p>
            <p>{props.workFrom} - {props.workTo}</p>
        </div>
    )
}

export default CVWork