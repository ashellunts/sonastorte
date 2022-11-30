import React from 'react';
import ReactDOM from 'react-dom/client';
import DecorExplorer from './DecorExplorer/DecorExplorer';

const decorsList = [
  {
    name: "русалка",
    tags: ["девочка"]
  },
  {
    name: "машинки",
    tags: ["мальчик"]
  },
  {
    name: "футбол",
    tags: ["мальчик"]
  },
  {
    name: "дисней",
    tags: ["девочка"]
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DecorExplorer decorsList={decorsList} />
  </React.StrictMode>
);
