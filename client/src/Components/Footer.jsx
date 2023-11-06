import "../style/footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer" id="footer">
            <div className="footer-sections">
                <div className="foot-section">
                    <img
                        className="footer-logo"
                        // src={smallLogo}
                        alt="footer-logo"
                    />
                </div>

                <div className="foot-section">
                    <li className="heading">
                        <span className="green-text">Projects</span>
                    </li>
                    
                    <div onClick={() => {navigate("/projects")}}>Projects</div>
                </div>

                <div className="foot-section">
                    <li className="heading">
                        <span className="green-text">Other</span>
                    </li>
                    
                    <div onClick={() => {navigate("/pricing")}}>Pricing</div>
                    <div onClick={() => {navigate("/docs")}}>Docs</div>
                </div>
                
                <div
                    className="foot-section">
                    <li className="heading">
                        <span className="green-text">Blogs</span>
                    </li>

                    <div onClick={() => {navigate("/blogs/1")}}>Blog 1</div>
                    <div onClick={() => {navigate("/blogs/2")}}>Blog 2</div>
                    <div onClick={() => {navigate("/blogs/3")}}>Blog 3</div>
                </div>

                <div className="foot-section">
                    <li className="heading"><span className="green-text">Social</span></li>
                    
                    <div href="/">Instagram</div>
                    <div href="/">Youtube</div>
                    <div href="/">Facebook</div>
                    <div href="/">Twitter</div>
                </div>
            </div>
            <hr />
            <div className="below-footer-links">
                <div className="below-footer-section privacy-policy gradient">
                    <div href="/">Terms</div>
                    <div href="/">Privacy Policy</div>
                </div>

                <div className="below-footer-section gap30 below-footer-brands">
                    <a target="_blank" href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a target="_blank" href="#"><i className="fa-brands fa-youtube"></i></a>
                    <a target="_blank" href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a target="_blank" href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>

                <div className="below-footer-section">
                    <span>@{new Date().getFullYear()}&nbsp; Project Portal, Ireland 000-000 | All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
