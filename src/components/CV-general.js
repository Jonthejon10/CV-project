/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
class CVGeneral extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='cv-general'>
                <h1>Personal information</h1>
                <h2>{this.props.name}</h2>

                <div className='logo-div'>
                    <img src={require("../images/address.png").default}/>
                    <p>{this.props.address}</p>
                </div>

                <div className='logo-div'>
                    <img src={require("../images/email.png").default}/>
                    <p>{this.props.email}</p>
                </div>

                <div className='logo-div'>
                    <img src={require("../images/phone.png").default}/>
                    <p>{this.props.phone}</p>
                </div>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default CVGeneral