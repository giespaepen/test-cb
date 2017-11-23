import React from 'react'

const Componist = props => {
  return (
    <div >
      <a href={props.componist.url.replace('{parent_url}', 'http://localhost:3000').replace('{id}', props.componist.id)}><h5 style={{padding: '40px'}}>
        {props.componist.name}
      </h5></a>
    </div>
  )
}

export default Componist
