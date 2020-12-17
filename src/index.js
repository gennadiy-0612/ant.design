import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Screen2 from './Screen2';
import App from './App';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,
    document.getElementById('header')
);
ReactDOM.render(
    <React.StrictMode>
        <Screen2 />
    </React.StrictMode>,
    document.getElementById('Frame2')
);
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <Screen4 />
    </React.StrictMode>,
    document.getElementById('Frame4')
);
ReactDOM.render(
    <React.StrictMode>
        <Screen5 />
    </React.StrictMode>,
    document.getElementById('Frame5')
);
ReactDOM.render(
    <React.StrictMode>
        <Screen6 />
    </React.StrictMode>,
    document.getElementById('Frame5')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
