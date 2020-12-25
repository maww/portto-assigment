import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListView from '../views/ListView'
import DetailView from '../views/DetailView'

function App() {
  return (
    <Switch>
      <Route path="/detail/:address/:token" component={DetailView} />
      <Route path="/" component={ListView}/>
    </Switch>
  )
}

export default App
