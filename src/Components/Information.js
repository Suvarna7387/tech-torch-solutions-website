import InformationImage from "../images/InformationImage.jpg";
import './Information.css'; 
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Information() {
  return (
    <div className="information-container">
      <div className="image-container">
        <img src={InformationImage} alt="Information" />
      </div>
      <div className="content-container">
        <div>
          <h2>Elevate your vision with us, your premier Website & App Development company.</h2>
          <div>“Welcome to TechTorch Solutions – your premier partner for Website & App Development. We empower your vision with excellence, delivering cutting-edge websites and dynamic mobile apps. With innovation and client satisfaction at our core, we transform ideas into exceptional digital experiences. Elevate your online presence with TechTorch Solutions, where excellence meets innovation.”</div>
          <Button variant="contained" className="discover-button" endDecorator={<KeyboardArrowRightIcon />}>Discover More</Button>
        </div>
      </div>
    </div>
  );
}

export default Information;
