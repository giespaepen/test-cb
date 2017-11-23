import React from 'react'
import MenuItem from '../components/MenuItem'

const Home = props => {
  console.log(props)
  return (
    <div >
      {props.componists.map(stylePeriod => (
        <div>
          <MenuItem items={stylePeriod.items} name={stylePeriod.name} />
        </div>
      ))
      }

    </div>
  )
}

export default Home
