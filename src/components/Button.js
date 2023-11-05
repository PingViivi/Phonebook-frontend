import React from 'react'

const Button = ({text}) => {
  return (
    <button style={buttonStyles}>
        {text}
    </button>
  )
}

const buttonStyles = {
    backgroundColor: '#f5f5f5',
}

export default Button