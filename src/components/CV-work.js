/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class CVWork extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='cv-work'>
                <h1>Work experience</h1>
                <h2>{this.props.company}</h2>
                <p>{this.props.position}</p>
                <p>{this.props.workFrom} - {this.props.workTo}</p>
            </div>
        )
    }
}

export default CVWork