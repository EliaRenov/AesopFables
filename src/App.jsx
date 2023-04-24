import IndexPage from "./IndexPage"
import AboutPage from "./AboutPage"
import MashalPage from "./MashalPage"
import CollectionPage from "./CollectionPage"

function App() {
  let Show = window.location.href.includes('mashal?') ? <MashalPage /> : <IndexPage />

  if (window.location.href.includes('mashal?')) {
    Show = <MashalPage />
  } else if (window.location.href.includes('collection')) {
    Show = <CollectionPage />
  } else if (window.location.href.includes('about')) {
    Show = <AboutPage />
  } else {
    Show = <IndexPage />
  }


  return ( 
    Show
    
  )
 
}

export default App
