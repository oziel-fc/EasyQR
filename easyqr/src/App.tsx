import './App.css'
import Header from './components/Header/Header.tsx'
import Main from './components/Main/Main.tsx'
import ToolDescription from './components/Description/ToolDescription.tsx'
import About from "./components/About/About.tsx"
import Footer from './components/Footer/Footer.tsx'

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <ToolDescription/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
