import Images from './Images/index';
import "antd/dist/antd.css";
import './MainPage.css';

function MainPage() {
    return (
        <div className="page2">
            <div className="Header">
                <div className="Header--logo">
                    <a className="logo-link"
                       href="/"
                    >
                        <img className="idnlogo"
                             src={Images.idnlogo}
                        />
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

            <div className="Screen2 ant-row demo-row">
                <div className="window1 ant-col-12">
                    <h1 className="window1-h">
                        The Infrastructure
                        Deals Network
                    </h1>
                    <p className="window1-descript">
                        The first deal origination platform for Private Equity
                        investments in infrastructure-related sectors
                    </p>
                    <div className="window1--button-group">
                        <div className="window1--description">
                            <p className="window1--description--button">
                                Senior Advisors
                            </p>
                            <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg S2">
                                Apply now
                            </button>
                        </div>
                        <div className="window1--description">
                            <p className="window1--description--button">
                                Investors
                            </p>
                            <button className="login invert ant-btn ant-btn-primary ant-btn-round ant-btn-lg S2">
                                Join now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="window2 ant-col-12">
                    <div className="dots"><img src={Images.bridge} className="illustrate" alt="bridge"/></div>
                </div>
                <a className="chevron"
                   href="/"
                >
                    <img
                        src={Images.arrowdown}
                        className="chevron--down"/>
                </a>
            </div>



            <div className="Screen9">
                <span className="idn-img"></span>
                <div className="foot-lists">
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">
                            Users
                        </li>
                        <li className="foot-li opacity6">
                            Investors
                        </li>
                        <li className="foot-li opacity6">
                            Senior Advisors
                        </li>
                    </ul>
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">
                            Sectors
                        </li>
                        <li className="foot-li opacity6">
                            Sectors
                        </li>
                    </ul>
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">
                            About
                        </li>
                        <li className="foot-li opacity6">
                            About Us
                        </li>
                        <li className="foot-li opacity6">
                            Terms & Conditions
                        </li>
                    </ul>
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">
                            Contact
                        </li>
                        <li className="foot-li opacity6">
                            info@infradeals.net
                        </li>
                        <li className="foot-li opacity6">
                            + 23232323232
                        </li>
                        <li className="foot-li">
                            <span className="in"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
