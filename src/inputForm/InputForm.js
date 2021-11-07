import React from 'react'
import './style.css'

const InputForm = ({ inputError, inputFormData, inputFormDataHandler, closeForm, otherSelectBox, inputFormSubmit }) => {

    document.onkeyup = (key) => {
        if (key.code === 'Escape') {
            closeForm()
        } else if (key.code === 'Enter') {
            inputFormSubmit()
        }
    }
    const isDisabled = () => {
        if (otherSelectBox) {
            if (inputFormData.totalMarks) {
                return false
            }
            return true
        }
    }
    const { name, marks, totalMarks } = inputFormData

    return (
        <div className='inputFormContainer'>
            <div className="inputFormOverlay fade" onClick={closeForm}></div>
            <div className="inputForm scale">
                <h1>Student's Information</h1>
                <div className="errMsg">{inputError ? inputError : ''}</div>
                <input
                    name="name"
                    type="text"
                    placeholder="Student's name"
                    autoComplete='off'
                    spellCheck='false'
                    onChange={inputFormDataHandler}
                    autoFocus
                    value={name}
                />

                <div className="select">
                    <select
                        name="class"
                        className={otherSelectBox ? 'other' : ''}
                        onChange={inputFormDataHandler}
                    >
                        <option value="">Select class</option>
                        <option value="matric">Matric (850)</option>
                        <option value="nine">Nine (425)</option>
                        <option value="other">Custom</option>
                    </select>

                    {
                        otherSelectBox ?
                            <>
                                <div className="dash"></div>
                                <input
                                    autoFocus
                                    name='totalMarks'
                                    type="number"
                                    placeholder='Total marks'
                                    className='other'
                                    autoComplete='off'
                                    spellCheck='false'
                                    onChange={inputFormDataHandler}
                                    value={totalMarks}
                                />
                            </>
                            : ''
                    }

                </div>

                <input
                    name="marks"
                    type="number"
                    placeholder='Your marks'
                    className='dim'
                    autoComplete='off'
                    onChange={inputFormDataHandler}
                    value={marks}
                    disabled={isDisabled()}
                />

                <button onClick={inputFormSubmit}>Calculate</button>
            </div>
        </div>
    )
}

export default InputForm
