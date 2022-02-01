import { Switch } from 'react-router-dom'
import { Route } from './Route'
import Login from '../pages/Login'
import SignUp from '../pages/SingnUp'
import Profile from '../pages/Profile'
import LandingPage from '../pages/LandingPage'
import { Vaccines } from '../pages/Vaccines'
import Query from '../pages/Query'
import MedicationPage from '../pages/MedicationPage'
import Professionals from '../pages/Professionals'

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/vaccines' component={Vaccines} isPrivate />
      <Route path='/professionals' component={Professionals} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
      <Route path='/query' component={Query} isPrivate />
      <Route path='/medications' component={MedicationPage} isPrivate />
    </Switch>
  )
}

export default Routes
