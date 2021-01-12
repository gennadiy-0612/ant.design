import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import reportWebVitals from './reportWebVitals';
import routLocal from "./rout";

// ReactDOM.render(
//     <React.StrictMode>
//         <MainPage />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
ReactDOM.render(
    <React.StrictMode>
        <MainPage />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
