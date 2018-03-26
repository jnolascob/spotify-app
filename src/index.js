import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Media from './playlist/components/media/media';
import App from './playlist/components/splash/App';
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root');

// ReactDOM.render(
//   <Media title="¿Qué es responsive design?" author="Jonathan Nolasco" type="audio" />,
//   root,
// );
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, root);
registerServiceWorker();

