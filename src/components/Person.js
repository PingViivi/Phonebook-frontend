import React from 'react'


const Person = (props) => {
  const person = props.person
  return (
    <>
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={()=>props.delete(person.id)} style={buttonStyles}>
            Delete
            
          </button>
        </div>
    </>
  )
}

const buttonStyles = {
  backgroundColor: '#f5f5f5',
  border: 'none',
  borderRadius: '5px',
  padding: '8px',
}

export default Person