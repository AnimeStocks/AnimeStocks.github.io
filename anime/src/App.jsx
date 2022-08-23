import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Manga from './Home/MangaPage'
import LightNovel from './Home/LightNovelPage'
import Merch from './Home/MerchPage'
import About from './Home/About'
import Footer from './Footer'
// import About from './Pages/About'



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Manga" element={<Manga />} />
                <Route path="/LightNovel" element={<LightNovel />} />
                <Route path="/Merch" element={<Merch />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;