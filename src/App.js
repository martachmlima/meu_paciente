import Routes from './routes'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Routes />
    </>
  )
}

export default App
