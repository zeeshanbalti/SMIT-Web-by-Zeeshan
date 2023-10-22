import React from 'react';
import './four.css'; // Import your CSS file if you have one
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, title }) => {
  return (
    <div  className="card">
      <img src={imgSrc} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

const cardData = [
  {
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.WXOyi2RkWruFvwKiO-y6ewHaEK&pid=Api&P=0&h=220',
    title: 'Web Developer',
  },
  {
    imgSrc: 'https://media.istockphoto.com/photos/hackathon-technology-threat-online-coding-3d-illustration-picture-id1061070132?k=6&m=1061070132&s=612x612&w=0&h=udyX61pSVPJQtQcmM8pOtTNtgORp4zPRhkA5jUCSd54=',
    title: 'Mobile App Hakathon',
  },
  {
    imgSrc: 'https://blog.codingblocks.com/content/images/2020/06/competitive-programming.jpg',
    title: 'Compititive Programing',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1559701339-4f49d0b07462?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ',
    title: 'Gaming Design',
  },
  {
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.EqNo_Xwatr-16VSx7iOlcQHaEP&pid=Api&P=0&h=220',
    title: 'Artificial intelligence',
  },
  {
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.Z5j_owAoyEp9TpsStqWYNQHaEK&pid=Api&P=0&h=220',
    title: 'PWN CTF',
  },
  {
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.QYS_eXwrx0UkHt3BiAVotQHaMz&pid=Api&P=0&h=220',
    title: 'Esports FIFA',
  },
  {
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.7xGUI8TwzcHkxLc96JOBqgHaEG&pid=Api&P=0&h=220',
    title: 'Esports TEKKEN',
  },
];

function Four() {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} imgSrc={card.imgSrc} title={card.title} />
      ))}
    </div>

       );
}

export default Four;
 