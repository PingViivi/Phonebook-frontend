import React from 'react'
import Person from './Person'

const Persons = (props) => {
  return (
    <>
    <div style={rowLabels}>
      <div>Names</div>
      <div>Numbers</div>
      <div>Settings</div>
    </div>
    {
        props.persons.map((person) => (
          <Person person={person} delete={props.handleDelete}/>
        ))
      }
    </>
  )
}

const rowLabels = {
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px'
}
export default Persons