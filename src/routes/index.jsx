import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SingnUp'

function Routes () {
  return (
    <Switch>
      <Route exact path='/' >
        <Login/>
      </Route>
      <Route exact path='/signup' >
        <SignUp/>
      </Route>
    </Switch>
  )
}

export default Routes