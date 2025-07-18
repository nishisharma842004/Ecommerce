import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2025 &copy; MeNishiSharma</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.instagram.com/nishisharma8395/">Instagram</a>
       
      </div>
    </footer>
  );
};

export default Footer;
