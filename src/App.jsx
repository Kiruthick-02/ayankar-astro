import { BrowserRouter } from 'react-router-dom'
import AppRouter from "./routes/AppRoutes";
import './styles/globals.css'
import './styles/animations.css'
import './styles/variables.css'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App