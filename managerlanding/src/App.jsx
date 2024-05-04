
import './App.css'
import Main from './components/Main/Main'
import Slide from './components/carousel/Slide'
import Diff from './components/different/Diff'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Team from './components/teamworks/Team'

function App() {
 

  return (
    <>
      <Navbar />
      <Main />
      <Diff />
      {/* <Slide/> */}
      <Team />
      {/* <Footer/> */}
    </>
  )
}

export default App
