/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import GeneralInfo from './components/General-info'
import EducationInfo from './components/Education-info'
import WorkInfo from './components/Work-info'
import CVGeneral from './components/CV-general'
import CVEducation from './components/CV-education'
import CVWork from './components/CV-work'

import './styles/App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            nameInput: '',
            emailInput: '',
            addressInput: '',
            phoneInput: '',
            descriptionInput: '',

            schoolInput: '',
            cityInput: '',
            degreeInput: '',
            fromInput: '',
            toInput: '',

            companyInput: '',
            positionInput: '',
            workFromInput: '',
            workToInput: '',
        }

        this.getDataFromChild = this.getDataFromChild.bind(this)
    }

    getDataFromChild(val) {
        const name = val[0]
        const value = val[1]
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='forms-container'>
                    <GeneralInfo sendData={this.getDataFromChild}/>
                    <EducationInfo sendData={this.getDataFromChild}/>
                    <WorkInfo sendData={this.getDataFromChild}/>
                </div>

                <div className='cv-container'>
                    <div className='personal-container'>
                        <CVGeneral name={this.state.nameInput}
                            address={this.state.addressInput}
                            email={this.state.emailInput}
                            phone={this.state.phoneInput}
                            description={this.state.descriptionInput}
                        />
                    </div>

                    <div className='other-container'>
                        <CVEducation school={this.state.schoolInput}
                            city={this.state.cityInput}
                            degree={this.state.degreeInput}
                            from={this.state.fromInput}
                            to={this.state.toInput}
                        />

                        <CVWork company={this.state.companyInput}
                            position={this.state.positionInput}
                            workFrom={this.state.workFromInput}
                            workTo={this.state.workToInput}
                        />
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App