import React from 'react';
import Card from './Card';

const Home_Card = () => {
  const cards = [
    {
      image: 'https://www.resume-now.com/sapp/uploads/2023/11/reviewer-1-Jaide-F.png',
      title: 'Jaide F',
      name:'Registered Nurse',
      description: 'A funsactic Resume Creator! Helped me so much for landing job in an industry I did wanted to get into for quite sometime',
    },
    {
      image: 'https://www.resume-now.com/sapp/uploads/2023/11/reviewer-2-Elisabeth-M.png',
      title: 'Elisabeth M',
      name:'Account Manager',
      description: 'Very easy to use made a complete resume in under 20 minutes',
    },
    {
      image: 'https://www.resume-now.com/sapp/uploads/2023/11/reviewer-3-Kenneth.png',
      title: 'Kenneth',
      name:'Software Engineer',
      description: 'Fanstactic service! Great Templates and cover letter assistance help me land a great position and fast',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          name={card.name}
          description={card.description}
        />
      ))}
    </div>

    
  );
};

export default Home_Card;

