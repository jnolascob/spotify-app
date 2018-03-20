import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Media from './playlist/components/media';

const root = document.getElementById('root');

ReactDOM.render(
  <Media title="¿Qué es responsive design?" author="Jonathan Nolasco" type="audio" />,
  root,
);
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

