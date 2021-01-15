import React from "react";
import MainHeader from './MainHeader';
import MainPage from './MainPage';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import MainFooter from './MainFooter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import Images from "./Images";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/advisor">
                    <Advisor/>
                </Route>
                <Route path="/investors">
                    <Investors/>
                </Route>
                <Route path="/sectors">
                    <Sectors/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Page2/><Page3/><Page4/><Page5/>
            <MainFooter/>
        </Router>
    );
}

function Home() {
    return <MainPage/>;
}

function Advisor() {
    return <Page2/>;
}

function Investors() {
    return <Page3/>;
}

function Sectors() {
    return <Page4/>;
}

function About() {
    return <Page5/>;
}
