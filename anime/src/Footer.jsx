import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="footerimg">
                    <div className="footercol">
                        <img src="/images/logo.png" alt=""/>
                        <p>&copy; Copyright 2022 Anime Stocks</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li><Link to="">Terms & Conditions</Link></li>
                            <li><Link to="">Privacy Policy</Link></li>
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="social">
                        <Link to="https://www.facebook.com/AnimestocksPH">
                            <img src="/images/flogo.png" alt="Facebook" title="Facebook" id="flogo"/>
                        </Link>
                        <Link to="m.me/AnimestocksPH">
                            <img src="/images/mlogo.png" alt="Messenger" title="Messenger" id="flogo"/>
                        </Link>
                        <Link to="mailto:animestcks.@gmail.com">
                            <img src="/images/glogo.png" alt="Gmail" title="Gmail" id="flogo"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;