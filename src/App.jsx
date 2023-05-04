import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

import IndexPage from "./IndexPage"
import AboutPage from "./AboutPage"
import MashalPage from "./MashalPage"
import CollectionPage from "./CollectionPage"

function App() {

  return ( 
    <BrowserRouter basename="/react-mashal/">
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mashal" element={<MashalPage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
 
}

export default App
