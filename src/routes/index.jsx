import { Switch } from 'react-router-dom'
import { Route } from './Route'
import Login from '../pages/Login'
import SignUp from '../pages/SingnUp'
import Profile from '../pages/Profile'
import LandingPage from '../pages/LandingPage'
import { Vaccines } from '../pages/Vaccines'
import Appointment from '../pages/Appointment'
import MedicationPage from '../pages/MedicationPage'
import Professionals from '../pages/Professionals'
import PageNotFound from '../pages/PageNotFound'
import { useAuth } from '../providers/AuthContext'

function Routes() {
  const { accessToken } = useAuth()
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/vaccines' component={Vaccines} isPrivate />
      <Route path='/professionals' component={Professionals} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
      <Route path='/appointment' component={Appointment} isPrivate />
      <Route path='/medications' component={MedicationPage} isPrivate />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  )
}

export default Routes
