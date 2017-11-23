import React from 'react'
import Componist from './Componist'
const Language = props => {
  return (
    <div >
      <h2 style={{padding: '20px'}}>
        {props.language.name}
      </h2>
      {props.language.items && props.language.items.map(componist => <Componist componist={componist} />)}
    </div>
  )
}

export default Language
