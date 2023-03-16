import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './component/nav';
import Slider from './component/slider';
import Envios from './component/envios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <Slider/>
    <Envios/>
  </>
)