import './App.css'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor.jsx'
import Navbar from '../Components/Navbar.jsx'
import Hero from '../Components/Hero.jsx'
import Detail from '../Components/Detail.jsx'

function App() {
  

  return (
    <div className='h-screen bg-white text-white w-full '>
      <Navbar/>
      <Hero/>
      <Detail/>
      
    </div>
  )
}

export default App
