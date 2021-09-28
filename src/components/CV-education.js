/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class CVEducation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            times: 2
        }

        this.createNewEducation = this.createNewEducation.bind(this)
    }

    createNewEducation() {
        
    }
    render() {
        return (
            <div className='cv-education'>
                <h1>Education</h1>
                <h2>{this.props.school}, {this.props.city}</h2>
                <p>{this.props.degree}</p>
                <div className='education-dates'>
                    <p>{this.props.from} - {this.props.to}</p>
                </div>
            </div>
        )
    }
    
}

export default CVEducation