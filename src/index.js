import React from 'react';
import ReactDOM from 'react-dom/client';
import rusalka from './rusalka.jpeg'
import cars from './cars.jpeg'
import football from './football.jpeg'
import school from './school.jpeg'

import DecorExplorer from './DecorExplorer/DecorExplorer';

const decorsList = [
  {
    name: "Русалка",
    tags: ["дисней"],
    img: rusalka
  },
  {
    name: "Тачки",
    tags: ["дисней", "машинки"],
    img: cars
  },
  {
    name: "Манчестер Юнайтед",
    tags: ["футбол"],
    img: football
  },
  {
    name: "Торт для первокласницы",
    tags: ["девочка", "школа"],
    img: school
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DecorExplorer decorsList={decorsList} />
  </React.StrictMode>
);
