/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { useState } from 'react'
import GeneralInfo from './components/General-info'
import EducationInfo from './components/Education-info'
import WorkInfo from './components/Work-info'
import CVGeneral from './components/CV-general'
import CVEducation from './components/CV-education'
import CVWork from './components/CV-work'

import './styles/App.css'

const App = () => {
    const [inputValues, setInputValues] = useState('')

    const childToParent = (childName, childData) => {
        setInputValues({
            ...inputValues,
            [childName]: childData
        })
    }
        return (
            <div className='container'>
                <div className='forms-container'>
                    <GeneralInfo childToParent={childToParent}/>
                    <EducationInfo childToParent={childToParent}/>
                    <WorkInfo childToParent={childToParent}/>
                </div>

                <div className='cv-container'>
                    <div className='personal-container'>
                        <CVGeneral name = {inputValues.nameInput}
                            address = {inputValues.addressInput}
                          email={inputValues.emailInput}
                            phone={inputValues.phoneInput}
                            description={inputValues.descriptionInput}
                        />
                    </div>

                    <div className='other-container'>
                        <CVEducation school={inputValues.schoolInput}
                            city={inputValues.cityInput}
                            degree={inputValues.degreeInput}
                            from={inputValues.fromInput}
                            to={inputValues.toInput}
                        />

                        <CVWork company={inputValues.companyInput}
                            position={inputValues.positionInput}
                            workFrom={inputValues.workFromInput}
                            workTo={inputValues.workToInput}
                        />
                    </div> 
                </div>
            </div>
        )
}

export default App