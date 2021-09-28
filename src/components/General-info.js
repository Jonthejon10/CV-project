/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import '../styles/general-info.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            nameInput: '',
            emailInput: '',
            addressInput: '',
            phoneInput: '',
            descriptionInput: '',
        }
        this.changeInput = this.changeInput.bind(this)
        this.callBackMethod = this.callBackMethod.bind(this)
    }

    callBackMethod(data) {
        this.props.sendData(data)
    }

    changeInput(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        }, () => {
            this.callBackMethod([event.target.name, event.target.value])
        })
    }
    
    render() {
        return (
            <div className='general-info'>
                <h1>General</h1>
                <form className='general-form'>
                    <input type='text' name='nameInput' value={this.state.nameInput} onChange={this.changeInput} placeholder='name,'></input>
                    <input type='text' name='addressInput' value={this.state.addressInput} onChange={this.changeInput} placeholder='address,'></input>
                    <input type='text' name='emailInput' value={this.state.emailInput} onChange={this.changeInput} placeholder='email,'></input>
                    <input type='text' name='phoneInput' value= {this.state.phoneInput} onChange={this.changeInput} placeholder='phone number,'></input>
                    <input type='text' name='descriptionInput' value= {this.state.descriptionInput} onChange={this.changeInput} className='description' placeholder='tell us a little bit about you'></input>
                </form>

            </div>
        )
    }
}

export default GeneralInfo