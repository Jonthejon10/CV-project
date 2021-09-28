/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import '../styles/education-info.css'

class EducationInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            schoolInput: '',
            cityInput: '',
            degreeInput: '',
            fromInput: '',
            toInput: ''
        }

        this.changeInput = this.changeInput.bind(this)
        this.callBackMethod = this.callBackMethod.bind(this)
        this.addMoreEducation = this.addMoreEducation.bind(this)
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
    
    addMoreEducation() {
        this.setState({
            schoolInput: '',
            cityInput: '',
            degreeInput: '',
            fromInput: '',
            toInput: ''
        })
    }

    render() {
        return (
            <div className = 'education-info'>
                <h1>Education</h1>
                <form className='education-form'>
                    <input type='text' name='schoolInput' value={this.state.schoolInput} onChange={this.changeInput} placeholder='school attended,'></input>
                    <input type='text' name='cityInput' value={this.state.cityInput} onChange={this.changeInput} placeholder='city,'></input>
                    <input type='text' name='degreeInput' value={this.state.degreeInput} onChange={this.changeInput} placeholder='degree,'></input>
                    <input type='text' name='fromInput' value={this.state.fromInput} onChange={this.changeInput} placeholder='from,'></input>
                    <input type='text' name='toInput' value={this.state.toInput} onChange={this.changeInput} placeholder='to'></input>
                </form>
                <button type='button' className='add-education' onClick={this.addMoreEducation}>Add more</button>
            </div>
        )
    }
}

export default EducationInfo