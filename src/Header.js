import logo from './img/logo.svg';
import "antd/dist/antd.css";
import './Header.css';

function App() {
    return (
        <div className="Header">
            <div className="Header--logo">
                <a className="logo-link"
                   href="/"
                >
                    <img src={logo} className="Header--logo--img" alt="logo"/>
                    <div className="logo-texts">
                        <div className="logo-text">
                            IDN
                        </div>
                        <div className="logo-text-sub">
                            The Infra Deals Network
                        </div>
                    </div>
                </a>
            </div>
            <nav className="main-top-nav">
                <a className="main-top-nav-anchor"
                   href="/"
                   rel="noopener noreferrer"
                >
                    Senior Advisor
                </a>
                <a className="main-top-nav-anchor"
                   href="/"
                   rel="noopener noreferrer"
                >
                    Investors
                </a>
                <a className="main-top-nav-anchor"
                   href="/"
                   rel="noopener noreferrer"
                >
                    Sectors
                </a>
                <a className="main-top-nav-anchor"
                   href="/"
                   rel="noopener noreferrer"
                >
                    About
                </a>
            </nav>
            <div className="login-block">
                <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg">
                    Login
                </button>
            </div>
        </div>
    );
}

export default App;
