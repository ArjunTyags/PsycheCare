import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from "./components/header/Navbar"
import Home from "./pages/1.home/Home"
import Accounts from "./pages/2.accounts/Accounts"
import Contract from "./pages/4.contact/Contract"
import TrackProgress from "./pages/3.trackProgress/TrackProgress"

function App() {

  return (
    <div className='w-screen h-screen bg-purple-300'>
    <Router>
     <Navbar/>
     <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route exact path='/accounts' element={<Accounts/>}/>
     <Route exact path='/trackProgress' element={<TrackProgress/>}/>
     <Route exact path='/contract' element={<Contract/>}/>
     </Routes>
    </Router>

    </div>
  )
}

export default App
