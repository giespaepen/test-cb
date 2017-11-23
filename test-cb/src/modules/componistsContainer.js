import React from 'react'

export default props => {
  console.log(props)
  return (
    <div>
      Componist {props.match.params.id}
    </div>
  )
}
