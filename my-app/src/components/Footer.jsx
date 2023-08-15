function Footer(){
    return(
        <div className="footer-container">
                <div className="footer-logo">
                    <img src="./images/footer-icon.png" alt="footer"></img>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li>Get the App</li>
                        <li><img src="./images/footer1.svg" alt="footer1"></img></li>
                        <li><img src="./images/footer2.svg" alt="footer2"></img></li>
                        <li>Follow Us On</li>
                        <span>
                        <li><img src="./images/facebook.png" alt="facebook"></img></li>
                        <li><img src="./images/instagram.png" alt="instagram"></img></li>
                        <li><img src="./images/linkedin.png" alt="linkedin"></img></li>
                        <li><img src="./images/twitter.png" alt="twitter"></img></li>
                        <li><img src="./images/whatsapp.png" alt="twitter"></img></li>
                        </span>
                        <li> <button>Back to Top</button></li>
                    </ul>
                </div>
        </div>
    )
}
export default Footer;