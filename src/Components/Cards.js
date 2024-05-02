  import * as React from 'react';
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Typography from '@mui/material/Typography';
  import { CardActionArea } from '@mui/material';
  import cardone from "../images/cardone.jpeg";
  import cardsecond from "../images/cardsecond.jpeg"
  import cardthird from "../images/cardthird.jpeg"
  import cardfourth from "../images/cardfourth.jpg"
  import cardfifth from "../images/cardfifth.jpg"
  import "./Cards.css"

  const Cards = () => {
    // Array of objects containing data for each card
    const cardData = [
      {
        title: "App Development",
        image: cardone,
        description: "Transform your ideas into powerful mobile applications. Our expert team crafts seamless, user-friendly apps tailored to your unique requirements, ensuring a standout presence in the digital landscape.",
      },
      {
        title: "Website Development",
        image: cardsecond,
        description: "Elevate your online presence with our cutting-edge website development services. From captivating design to robust functionality, we create websites that engage audiences and drive results.",
      },
      {
        title: "UI/UX Design",
        image: cardthird,
        description: "Create exceptional user experiences with our UI/UX design services. We focus on intuitive and visually appealing designs that enhance user satisfaction and elevate your digital presence.",
      },
      {
        title: "Digital Marketing and Lead Generation",
        image: cardfourth,
        description: "Maximize your online reach with our strategic digital marketing services. We offer tailored plans to boost visibility, engage audiences, and generate valuable leads for sustainable growth.",
      },
      {
        title: "Training Programs",
        image: cardfifth,
        description: "Enhance your skills in Business Development, QA (Manual + Automation), Front-end Development, and more. Gain real project experience and showcase your achievements on our platform to shine in the competitive market.",
      },
    ];

    return (
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                // component="img"
                sx={{ height: 270 }}
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div"className='card-title'>
                  {card.title}
                </Typography>
                <div  className='card-description'>
                  {card.description}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    );
  };

  export default Cards;
