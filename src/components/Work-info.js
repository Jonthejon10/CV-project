import React, { Component } from 'react'
import '../styles/work-info.css'

class WorkInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyInput: '',
            positionInput: '',
            workFromInput: '',
            workToInput: ''
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
            <div className='work-info'>
                <h1>Work experience</h1>
                <form className='work-form'>
                <input type='text' name='companyInput' value={this.state.companyInput} onChange={this.changeInput} placeholder='previous company,'></input>
                <input type='text' name='positionInput' value={this.state.positionInput} onChange={this.changeInput} placeholder='position occupied,'></input>
                <input type='text' name='workFromInput' value={this.state.fromInput} onChange={this.changeInput} placeholder='from,'></input>
                <input type='text' name='workToInput' value={this.state.toInput} onChange={this.changeInput} placeholder='to'></input>            
                </form>              
                <button type='button' className='add-education'>Add more</button>
            </div>
        )
    }
}

export default WorkInfo