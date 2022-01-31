import { Switch } from 'react-router-dom'
import { Route } from './Route'
import Login from '../pages/Login'
import SignUp from '../pages/SingnUp'
import Profile from '../pages/Profile'
import LandingPage from '../pages/LandingPage'
import { Vaccines } from '../pages/Vaccines'
import Exams from '../pages/Exams'
import Query from '../pages/Query'
import MedicationPage from '../pages/MedicationPage'

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/vaccines' component={Vaccines} isPrivate />
      <Route path='/exams' component={Exams} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
      <Route path='/query' component={Query} isPrivate />
      <Route path='/medications' component={MedicationPage} isPrivate />
    </Switch>
  )
}

export default Routes
