import IndexPage from "./IndexPage"
import AboutPage from "./AboutPage"
import MashalPage from "./MashalPage"

function App() {
  let Show = window.location.href.includes('mashal?') ? <MashalPage /> : <IndexPage />


  return ( 
    Show
    
  )
 
}

export default App
