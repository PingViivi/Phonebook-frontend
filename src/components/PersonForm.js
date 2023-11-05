import React from 'react'
import Button from './Button'

const PersonForm = (props) => {
  return (
    <form style={form} onSubmit={props.handleSubmit}>
        <label style={label}>
            name: 
            <input 
                style={inputField}
                value={props.newName}
                onChange={props.handleNameChange}
            />
            </label>
        <label style={label}>
            number: 
            <input 
                style={inputField}
                value={props.newNumber}
                onChange={props.handleNumberChange}
            />
        </label>
        <div>
            <button style={submit} type="submit">add
                +
            </button>
        </div>
    </form>
  )
}

const form = {
    borderRadius: '5px',
    background: 'linear-gradient(93deg, #C4CADF 3.82%, #A2A4D5 100%)',
    color: '#201E40',
    fontSize: '16px',
    display: 'flex',
    padding: '12px',
}
const inputField = {
    borderRadius: '5px',
    border: '1px solid #3A47B3',
    background: 'rgba(255, 255, 255, 0.30)',
    padding: '8px 12px'
}
const label = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingRight: '12px'
}
const submit = {
    background: 'linear-gradient(90deg, #5A66D4 0.32%, #2C39A5 99.75%)',
    border: 'none',
    color: '#fff',
    borderRadius: '50px'
}
  

export default PersonForm