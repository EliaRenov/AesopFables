import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

import IndexPage from "./IndexPage"
import AboutPage from "./AboutPage"
import MashalPage from "./MashalPage"
import CollectionPage from "./CollectionPage"

function App() {

  return ( 
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/react-mashal" element={<IndexPage />} />
          <Route path="/react-mashal/about" element={<AboutPage />} />
          <Route path="/react-mashal/mashal" element={<MashalPage />} />
          <Route path="/react-mashal/collection" element={<CollectionPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
 
}

export default App
