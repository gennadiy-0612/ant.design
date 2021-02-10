import React from "react";
import MainPage from './MainPage';
import AdvisorPage from './AdvisorPage';
import InvestorsPage from './InvestorsPage';
import SectorsPage from './SectorsPage';
import AboutPage from './AboutPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/advisors">
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
                <Route path="/privacy-policy">
                    <Privacy/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    return <MainPage/>;
}

function Advisor() {
    return <AdvisorPage/>;
}

function Investors() {
    return <InvestorsPage/>;
}

function Sectors() {
    return <SectorsPage/>;
}

function About() {
    return <AboutPage/>;
}
function Privacy() {
    return <PrivacyPolicyPage/>;
}
