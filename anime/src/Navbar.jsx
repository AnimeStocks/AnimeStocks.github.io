import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearch, setIsSearch] = useState('')

    return (
        <nav id="navbar">
            <img id="navbar--logo" src="/images/logo.png" alt="Logo" title="Hello there >.<" />

        {/* SEARCH BAR */}
        <div className="navbar--searchbar">
            <input type="text" id="search-item" placeholder="Search products" onChange={event => {setIsSearch(event.target.value)}} />
        </div>
            <div className="navbar--right">
                <ul className={isOpen ? "hidden content" : "hidden"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Manga">Manga</Link></li>
                    <li><Link to="/LightNovel">Light Novels</Link></li>
                    <li><Link to="/Merch">Merch</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                </ul>
            </div>
            <div className="navbar--menu" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <img src="/images/close.png"/> : <img src="/images/open.png"/>}
            </div>
    </nav>
    )
}

export default Navbar;