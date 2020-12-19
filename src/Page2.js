import Images from './Images/index';
import "antd/dist/antd.css";
import './MainPage.css';
import pagetop from "./Images/page2top.png";

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
                <div className="window1 ant-col-12 P2 S2-P2">
                    <h1 className="main-header-second-h2 head2 P2 S2-P2">Senior Advisors</h1>
                    <p className="window1-descript P2 S2-P2">Leverage your network
                        and industry knowledge
                        <span className="main-post-link P2 S2-P2">to originate</span> proprietary investment opportunities
                        for <span className="yellow-upper">Private Equity investors</span></p>
                    <div className="window1--button-group P2">
                        <div className="window1--description">
                            <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg S2">Apply now
                            </button>
                        </div>
                        <div className="window1--description">
                            <button
                                className="login invert ant-btn ant-btn-primary ant-btn-round ant-btn-lg S2 P2">Learn
                                more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="window2 ant-col-12">
                    <div className="dots"><img src={Images.pagetop} className="illustrate" alt="bridge"/></div>
                </div>
            </div>

            <div className="Screen4 P2">
                <h2 className="main-header-second-h2 head2 center P2-h2">WHO OUR</h2>
                <p className="main-post-link center frame4 P2 P2-S4">Senior Advisors are</p>
                <div className="back-color">
                    <p className="normal main-p center cover P2 P2-S4">Our Senior Advisors are independent Senior Executives
                        across every infrastructure related sector<br/>
                        <span className="main-post-link P2 third-screen third-line">in Europe and beyond</span></p>
                    <div className="two-columns">
                        <p className="two-column--p"><span className="main-post-link P2 third-screen">To join our platform</span> they
                            have to demonstrate an extensive personal network of contacts with decision makers mixed
                            with in-depth industry knowledge. Most of them have a combination</p>
                        <p className="two-column--p">of both, making them ideally positioned to originate unique <span
                            className="main-post-link P2 third-screen">investment opportunities</span> for our
                            investors, advise them through the due diligence process, and join their portfolio companies
                            as NED</p>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2">
                <div className="window1 P2 P2-S5">
                    <div className="dots P2"><img src={Images.attentionman} className="illustrate P2" alt="bridge"/>
                    </div>
                </div>
                <div className="window2 P2">
                    <h2 className="main-header-second-h2 head2 P2">How IT WORKS</h2>
                    <p className="window1-h P2">Sign Up</p>
                    <p className="window1-descript P2">Sign up and stay connected to your industry network to identify
                        M&A
                        opportunities</p>
                    <p className="window1-descript P2">Receive mandates from sellers to find investors or from investors
                        to
                        originate opportunities</p>
                </div>
            </div>

            <div className="Screen6 P2">
                <div className="window1 P2">
                    <p className="window1-h P2 S6-P2">Share</p>
                    <p className="window1-descript P2 S6-P2">Confidentially share on IDN details about<br/>
                    the investment opportunities you<br/>
                    identified</p>
                    <p className="window1-descript P2 S6-P2">IDN connects you to and let you screen investors interested
                        in your opportunities</p>
                </div>
                <div className="window2 P2">
                    <div className="dots P2 S6-P2">
                        <img  className="illustrate P2" src={Images.manwithsmile}
                                                        alt="bridge"/>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S7">
                <div className="window1 P2 P2-S7">
                    <div className="dots P2 P2-S7">
                        <img src={Images.handspeople} className="illustrate P2"
                                                        alt="bridge"/>
                    </div>
                </div>
                <div className="window2 P2 P2-S7">
                    <p className="window1-h P2 P2-S7">Connect</p>
                    <p className="window1-descript P2">Select investors, arrange video calls, and start exchanging documents safely</p>
                    <p className="window1-descript P2">Introduce buyer and seller and facilitate the negotiations between the parties</p></div>
            </div>

            <div className="Screen6 P2">
                <div className="window1 P2">
                    <p className="window1-h P2 S6-P2">Advise</p>
                    <p className="window1-descript P2 S6-P2">Manage the relations and advise throughout the due
                        diligence process</p>
                    <p className="window1-descript P2 S6-P2">Receive a pre-agreed success fee up to € 2 million at deal
                        closure</p>
                </div>
                <div className="window2 P2">
                    <div className="dots P2 S6-P2"><img src={Images.handspaper} className="illustrate P2" alt="bridge"/>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S7">
                <div className="window1 P2 P2-S7">
                    <div className="dots P2 P2-S7"><img src={Images.handscross} className="illustrate P2" alt="bridge"/>
                    </div>
                </div>
                <div className="window2 P2">
                    <p className="window1-h P2">Beyond</p>
                    <p className="window1-descript P2">Keep working with investors as a NED, an interim C-level, or a Senior Advisor on retainer</p>
                    <p className="window1-descript P2">Keep originating investment opportunities on IDN and connect to new investors </p>
                </div>
            </div>

            <div className="Screen8">
                <h2 className="Screen7--h2 S8">Do you want to learn more?</h2>
                <button className="login invert ant-btn ant-btn-primary ant-btn-round ant-btn-lg S8">Get in Touch
                </button>
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
