import { Button, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./aboutSection.css";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/nishisharma8395/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            
            <Typography>Nishi Sharma</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @nishisharma.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
          
           

            <a href="https://www.instagram.com/nishisharma8395/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
