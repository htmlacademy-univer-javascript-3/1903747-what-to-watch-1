import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CardMock } from './types/types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


const mocks: CardMock[] = [
  {cardTitle : 'Bohemian Rhapsody', imgSrc : 'img/bohemian-rhapsody.jpg'},
  {cardTitle : 'Pulp Fiction', imgSrc : 'img/pulp-fiction.jpg'},
  {cardTitle : 'Shutter Island', imgSrc : 'img/shutter-island.jpg'},
];

root.render(
  <React.StrictMode>
    <App cardMocksArray={mocks}/>
  </React.StrictMode>,
);
