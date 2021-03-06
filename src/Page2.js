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
                        <span className="main-post-link P2 S2-P2">to originate</span> proprietary investment
                        opportunities
                        for <span className="yellow-upper">Private Equity investors</span></p>
                    <div className="window1--button-group P2 P2-S2">
                        <div className="window1--description">
                            <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg S2">Apply now
                            </button>
                        </div>
                        <div className="window1--description">
                            <button
                                className="login invert ant-btn ant-btn-primary ant-btn-round ant-btn-lg S2 P2 P2-S2">Learn
                                more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="window2 ant-col-12">
                    <div className="dots"><img src={Images.pagetop} className="illustrate" alt="bridge"/></div>
                </div>
            </div>

            <div className="Screen4 P2 P2-S4">
                <h2 className="main-header-second-h2 head2 center P2-h2">WHO OUR</h2>
                <p className="main-post-link center frame4 P2 P2-S4">Senior Advisors are</p>
                <div className="back-color">
                    <p className="normal main-p center cover P2 P2-S4">Our Senior Advisors are independent Senior
                        Executives
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

            <div className="Screen5 P2 P2-S5dashed">
                <div className="window1 P2 P2-S5">
                    <div className="dots P2 P2-S5"><img src={Images.attentionman} className="illustrate P2" alt="bridge"/>
                    </div>
                </div>
                <div className="window2 P2 P2-S5 left-dashed">
                    <h2 className="main-header-second-h2 head2 P2">How IT WORKS</h2>
                    <p className="window1-h P2 P2-S5 added-element-before">Sign Up</p>
                    <p className="window1-descript P2 added-element-before rounded-frame global-network">Sign up and
                        stay connected to your industry network to identify
                        M&A
                        opportunities</p>
                    <p className="window1-descript P2 added-element-before rounded-frame bird">Receive mandates from
                        sellers to find investors or from investors
                        to
                        originate opportunities</p>
                </div>
            </div>

            <div className="Screen6 P2 P2-S5dashed">
                <div className="window1 P2 P2-S6 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before">Share</p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame chat">Confidentially
                        share on IDN details about<br/>
                        the investment opportunities you<br/>
                        identified</p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame dotline">IDN
                        connects you to and let you screen investors interested
                        in your opportunities</p>
                </div>
                <div className="window2 P2">
                    <div className="dots P2 S6-P2">
                        <img className="illustrate P2" src={Images.manwithsmile}
                             alt="bridge"/>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7">
                    <div className="dots P2 P2-S7">
                        <img src={Images.handspeople} className="illustrate P2"
                             alt="bridge"/>
                    </div>
                </div>
                <div className="window2 P2 P2-S7 left-dashed">
                    <p className="window1-h P2 P2-S7 added-element-before">Connect</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame videocall">Select
                        investors, arrange video calls,<br/> and start
                        exchanging
                        documents safely</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame cursor">Introduce buyer
                        and seller and facilitate the negotiations
                        between the parties</p></div>
            </div>

            <div className="Screen6 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7 P2-S6 P2-S62 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before P2-S6">Advise</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame process">Manage
                        the relations and advise throughout the due
                        diligence process</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame infrastructure">Receive
                        a pre-agreed success fee up to € 2 million
                        at deal
                        closure</p>
                </div>
                <div className="window2 P2">
                    <div className="dots P2 S6-P2"><img className="illustrate P2" src={Images.handspaper} alt="bridge"/>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S72 P2-S53">
                <div className="window1 P2 P2-S7 P2-S72">
                    <div className="dots P2 P2-S7 P2-S72"><img className="illustrate P2" src={Images.handscross}
                                                               alt="bridge"/></div>
                </div>
                <div className="window2 P2 P2-S72 left-dashed">
                    <p className="window1-h P2 P2-S72 added-element-before">Beyond</p>
                    <p className="window1-descript P2 P2-S72 added-element-before rounded-frame suitcase">Keep working
                        with investors as a NED, an interim C-level,
                        or a
                        Senior Advisor on retainer</p>
                    <p className="window1-descript P2 P2-S72 added-element-before rounded-frame phonebook">Keep
                        originating investment opportunities on IDN and
                        connect to
                        new investors </p>
                </div>
            </div>

            <div className="Screen7 P2-S7-remade">
                <h2 className="Screen7--h2 P2-S7-remade">Why IDN?</h2>
                <p className="Screen7--p P2-S7-remade">IDN offers Senior Advisors a unique incentive to originate
                    investment opportunities<br/>
                    for the world’s leading investors while also eliminating all frictions to the deal matching process
                </p>
                <div className="S7 P2-S7-remade">
                    <div className="sectors S7 P2-S7-remade">
                        <div className="info-graph">
                            <span className="sector one normal main-p center S7 P2-S7-remade">CONNECTION</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN connects Senior Advisors to dozens of leading investors
                                    worldwide
                                </li>
                                <li className="dots-item">We eliminate the need of approaching investment firms
                                    independently
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <span className="sector five normal main-p center S7 P2-S7-remade">TRUST</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN provides a robust legal framework to the deal origination
                                    process
                                </li>
                                <li className="dots-item">We guarantee trust and confidentiality to all parties
                                    involved
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <span
                                className="sector COMMUNICATION normal main-p center S7 P2-S7-remade">COMMUNICATION</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN’s intuitive dashboard helps Advisors through the process
                                </li>
                                <li className="dots-item">We provide a number of tools that facilitates smooth
                                    communication with investors
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <span className="sector two normal main-p center S7 P2-S7-remade">REMUNERATION</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN has already negotiated the fee levels with investors on
                                    behalf of Advisors
                                </li>
                                <li className="dots-item">We remove the hassle of uneven negotiations between
                                    individuals and investors
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <span className="sector five supp normal main-p center S7 P2-S7-remade">SUPPORT</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN offers full support and counsel to Advisors throughout the
                                    process
                                </li>
                                <li className="dots-item">We are always available to support Advisors with a dedicated
                                    Relationship Manager
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <div className="window1--description S7 S71 dot-list Advisor">
                                <p className="window1--description--button S7 P2-S7 Advisor">Senior Advisors</p>
                                <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg S7 S2 P2-S7">Apply
                                    now
                                </button>
                            </div>
                        </div>
                    </div>
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
