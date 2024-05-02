import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import htmlImage from "../images/htmlImage.png";
import cssImage from "../images/cssImage.png";
import jsImage from "../images/jsImage.png";
import reactImage from "../images/reactImage.png";
import "./Cards.css";

const Blogs = () => {

    const cardData = [
        {
          title: "HTML",
          image: htmlImage,
          description: "Learn the foundation of web development with HTML. Build the structure of your web pages and understand the basics of semantic markup.",
        },
        {
          title: "CSS",
          image: cssImage,
          description: "Style your web pages and make them visually appealing with CSS. Learn layout techniques, color schemes, and responsive design principles.",
        },
        {
          title: "JavaScript",
          image: jsImage,
          description: "Add interactivity and dynamic behavior to your websites using JavaScript. Learn about variables, functions, DOM manipulation, and more.",
        },
        {
          title: "React.js",
          image: reactImage,
          description: "Build modern, interactive web applications with React.js. Learn about components, state management, routing, and other advanced features.",
        },
      ];
  return (
    <div className="cards-container">
    {cardData.map((card, index) => (
      <Card key={index} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={card.image}
            alt={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='card-title'>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='card-description'>
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </div>
  )
}

export default Blogs
