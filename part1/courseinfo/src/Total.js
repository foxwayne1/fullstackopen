import React from 'react'

const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

export default Total
