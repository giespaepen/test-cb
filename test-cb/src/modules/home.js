import React from 'react'
import Language from '../components/Language'

const Home = props => {
  console.log(props)
  return (
    <div >
      {props.componists.map(stylePeriod => (
        <div>
          <h1 style={{color: 'red'}}>{stylePeriod.name}</h1>
          {stylePeriod.items.map(language => (
            <Language language={language} />
          )
          )}
        </div>
      ))
      }

    </div>
  )
}

export default Home
