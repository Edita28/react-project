import  { Cover }  from './components/Cover/Cover'
import { Header } from "./components/Header"
import { About } from "./components/About_us/About"
import { Slider } from "./components/Trending_Slider/Slider"
import { Popular } from "./components/Popular_Tours/Popular_Tours"
import { Grab } from "./components/Grab/Grab"
import {Popular_things} from "./components/Popular_Things/Popular_Things"
import { Top_Trending } from "./components/Top_Trending"
import { Reviews } from './components/Reviews/Reviews'
import { App_Booking } from './components/App_Booking'
import { Travel_Articles } from './components/Travel_Articles/Travel_Articles'
import { Footer } from './components/Footer/Footer'



function App() {

  return (
    <>
      <div>
          <Header />
          <Cover/>
          <About/>
          <Slider/>
          <Popular/>
          <Grab/>
          <Popular_things/>
          <Top_Trending/>
          <Reviews/>
          <App_Booking/>
          <Travel_Articles/>
          <Footer/>
      </div>
    </>
  )
}

export default App
