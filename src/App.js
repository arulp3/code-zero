import logo from './logo.svg'
import './App.css'
import CreatePage from './Components/CreatePage'
import Forms from './Components/Forms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormDetail from './Components/FormDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/forms" element={<Forms />} />
          <Route path="/forms/:id" element={<FormDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
