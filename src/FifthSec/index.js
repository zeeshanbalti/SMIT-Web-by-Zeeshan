import React from 'react';
import './fifth.css';

function Card({ title, date, text, isLeft }) {
  const cardClass = isLeft ? 'card left' : 'card right';

  return (
    <>
    <div>
     </div>
    <div className={cardClass}>
      <div className="card-content">
        <h2 className="heading">{title}</h2>
        <p className="date">{date}</p>
        <p className="paragraph">{text}</p>
      </div>
    </div>
    </>
  );
}

function AnimatedCards() {
  return (
    <div className="animated-cards">
      <Card
        title="Left Card"
        date="October 25, 2023"
        text="This is the left card with a blue border and a sliding animation."
        isLeft={true}
      />
      <Card
        title="Right Card"
        date="October 25, 2023"
        text="This is the right card with a red border and a sliding animation."
        isLeft={false}
      />
      <Card
        title="Center Card 1"
        date="October 25, 2023"
        text="This is a centered card without animation."
        isLeft={false}
      />
      <Card
        title="Center Card 2"
        date="October 25, 2023"
        text="This is another centered card without animation."
        isLeft={false}
      />
      <Card
        title="Center Card 3"
        date="October 25, 2023"
        text="This is a third centered card without animation."
        isLeft={false}
      />
      <Card
        title="Center Card 4"
        date="October 25, 2023"
        text="This is a fourth centered card without animation."
        isLeft={false}
      />
    </div>
  );
}

export default AnimatedCards;
