import React from 'react'
import MenuItem2 from '../components/MenuItem'
import './MenuItem.css'

const MenuItem = props => {
  return (
    <div>
      <div key={props.key} className='item'>
        {props.url
      ? <a href={getUrl(props.url, props.id)} ><div>{props.name}</div></a>
      : <div>{props.name || 'no name'}</div>}
      </div>
      {props.items && <div className='side'>
        {props.items.map((item, index) => {
          return <MenuItem2 key={index} {...item} />
        })}
      </div>}
    </div>
  )
}

const getUrl = (url, id) => {
  return url.replace('{parent_url}', 'http://localhost:3000').replace('{id}', id)
}

export default MenuItem
