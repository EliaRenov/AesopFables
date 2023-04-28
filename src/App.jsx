import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

import IndexPage from "./IndexPage"
import AboutPage from "./AboutPage"
import MashalPage from "./MashalPage"
import CollectionPage from "./CollectionPage"

function App() {

  return ( 
    <BrowserRouter>
      <main>
        <NavLink to="/react-mashal/collection" >Collection test 1</NavLink>
        <NavLink to="/react-mashal/about" >About test 1</NavLink>

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
