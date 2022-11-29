import React from 'react';
import ReactDOM from 'react-dom/client';
import DecorExplorer from './DecorExplorer/DecorExplorer';

const decorsList = [
  {
    name: "русалка",
    tags: ["tag1", "tag2"]
  },
  {
    name: "машинки",
    tags: ["tag1"]
  },
  {
    name: "футбол",
    tags: ["tag1"]
  },
  {
    name: "дисней",
    tags: ["tag1"]
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DecorExplorer decorsList={decorsList} />
  </React.StrictMode>
);
