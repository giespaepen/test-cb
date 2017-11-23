import React from 'react'
import HomeContainer from './homeContainer'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={HomeContainer} />
    </div>
  </Router>
)

export default App
