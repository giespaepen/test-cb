import React from 'react'
import HomeContainer from './homeContainer'
import ComponistContainer from './componistsContainer'

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
      <Route path='/:id' component={ComponistContainer} />

    </div>
  </Router>
)

export default App
