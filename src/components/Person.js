import React from 'react'
import { DeleteOutline } from '@mui/icons-material'



const Person = (props) => {
  const person = props.person
  return (
    <>
        <div style={PersonCard} key={person.name}>
          <div>
          {person.name}
          </div>
          <div>
          {person.number}
          </div>
          <button onClick={()=>props.delete(person.id)} style={buttonStyles}>      
            <DeleteOutline/>
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

const PersonCard = {
  background: '#AED4E4',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 12px',
  marginBottom: '8px',
  borderRadius: '5px',
  color: '#201E40',
}

export default Person