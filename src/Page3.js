import Images from './Images/index';
import "antd/dist/antd.css";
import './Page2.css';
import handsandnote from "./Images/page3/handsandnote.png";

function MainPage() {
    return (
        <div className="page3 twofixed">
            <div className="Header">
                <div className="Header--logo">
                    <a className="logo-link" href="/">
                        <img className="idnlogo" src={Images.idnlogo}/>
                    </a>
                </div>
                <nav className="main-top-nav">
                    <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Senior Advisor</a>
                    <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Investors</a>
                    <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Sectors</a>
                    <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">About</a>
                </nav>
                <div className="login-block">
                    <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg">Login</button>
                </div>
            </div>

            <div className="Screen2 ant-row demo-row">
                <div className="window1 ant-col-12 P2 S2-P2">
                    <h1 className="main-header-second-h2 head2 P2 S2-P2">INVESTORS</h1>
                    <p className="window1-descript P2 S2-P2">
                        Access proprietary deals <span className="main-post-link P2 S2-P2">originated by</span> a
                        selected network of Senior Advisors. Negotiate and close transactions <span
                        className="yellow-upper">bilaterally</span></p>
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
                    <div className="dots"><img src={Images.handsandnote} className="illustrate" alt="bridge"/></div>
                </div>
            </div>

            <div className="Screen4 P2 P2-S4">
                <h2 className="main-header-second-h2 head2 center P2-h2">WHO OUR</h2>
                <p className="main-post-link center frame4 P2 P2-S4">Investors are</p>
                <div className="back-color">
                    <p className="normal main-p center cover P2 P2-S4">
                        Our investors are Senior professionals working at leading
                        Private Equity firms targeting infrastructure and related assets <span
                        className="main-post-link P2 third-screen third-line">in Europe and beyond</span></p>
                    <div className="two-columns">
                        <p className="two-column--p">Through IDN’s platform, our investors originate and close <span
                            className="main-post-link P2 third-screen">unique investment</span> opportunities, ranging
                            from a minimum
                            of 10 million Euroup to a billion Euro.</p>
                        <p className="two-column--p">Our sweet spot is <span
                            className="main-post-link P2 third-screen">mid-market</span> but large
                            cap transactions are also frequently originated on our platform
                            by our selected Senior Advisors</p>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S5dashed P3-S51">
                <div className="window1 P2 P2-S5">
                    <div className="dots P2 P2-S5"><img src={Images.mannotebook} className="illustrate P2"
                                                        alt="bridge"/>
                    </div>
                </div>
                <div className="window2 P2 P2-S5 left-dashed">
                    <h2 className="main-header-second-h2 head2 P2">How IT WORKS</h2>
                    <p className="window1-h P2 P2-S5 added-element-before">Sign Up</p>
                    <p className="window1-descript P2 added-element-before rounded-frame arrowsquare">Sign up for
                        free and provide information about the deal opportunities you are interested in
                    </p>
                    <p className="window1-descript P2 added-element-before rounded-frame papartext">
                        Information include deal size, sectors of interest, geography of focus, etc
                    </p>
                </div>
            </div>

            <div className="Screen6 P2 P2-S5dashed">
                <div className="window1 P2 P2-S6 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before">Get notified</p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame notificationdot">Get
                        notified when
                        Senior Advisors originate relevant opportunities or assign origination mandates
                    </p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame favorite">
                        Review the opportunities originated by Advisors and submit expressions of interest </p>
                </div>
                <div className="window2 P2">
                    <div className="dots P2 S6-P2">
                        <img className="illustrate P2" src={Images.mannotephone}
                             alt="bridge"/>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7">
                    <div className="dots P2 P2-S7">
                        <img src={Images.businessmeeting} className="illustrate P2"
                             alt="bridge"/>
                    </div>
                </div>
                <div className="window2 P2 P2-S7 left-dashed">
                    <p className="window1-h P2 P2-S7 added-element-before">Connect</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame videocall">Discuss the
                        opportunities in full confidentiality and transparency. Arrange video calls and exchange
                        documents</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame target">
                        Get introduced to the target companies and start the due diligence</p></div>
            </div>

            <div className="Screen6 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7 P2-S6 P2-S62 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before P2-S6">Close</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame process">Engage
                        Advisors to support you<br/> through the execution of the transactions</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame infrastructure">
                        Successfully close the investments bilaterally</p>
                </div>
                <div className="window2 P2">
                    <div className="dots P2 S6-P2"><img className="illustrate P2" src={Images.handshake} alt="bridge"/>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S72 P2-S53">
                <div className="window1 P2 P2-S7 P2-S72">
                    <div className="dots P2 P2-S7 P2-S72"><img className="illustrate P2" src={Images.manbigsmile}
                                                               alt="bridge"/></div>
                </div>
                <div className="window2 P2 P2-S72 left-dashed">
                    <p className="window1-h P2 P2-S72 added-element-before">Beyond</p>
                    <p className="window1-descript P2 P2-S72 added-element-before rounded-frame suitcase">Engage Senior
                        Advisors as NEDs, an interim C-levels, or via retainers to originate other investment
                        opportunities
                    </p>
                    <p className="window1-descript P2 P2-S72 added-element-before rounded-frame ipo">Keep
                        originating new proprietary investment opportunities through IDN’s extensive network of Senior
                        Advisors</p>
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
                            <span className="sector one normal main-p center S7 P2-S7-remade">PROPRIETARY</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN offers access to proprietary investment opportunities</li>
                                <li className="dots-item">Our Senior Advisors source deals that are currently
                                    off-market
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
                                className="sector two normal main-p center S7 P2-S7-remade P3-S7-remade">BILATERAL</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN offers access to bilateral investment opportunities</li>
                                <li className="dots-item">Our Senior Advisors facilitate the closing of bilateral
                                    deals
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <span
                                className="sector COMMUNICATION normal main-p center S7 P2-S7-remade">COMMUNICATION</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN’s intuitive dashboard guides Investors through the
                                    process
                                </li>
                                <li className="dots-item">We provide a number of tools that facilitate smooth
                                    communication with Advisors
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <span
                                className="sector five supp normal main-p center S7 P2-S7-remade P3-S7-remade">WIN-WIN</span>
                            <ul className="dot-list">
                                <li className="dots-item">IDN’s success-base model is win-win</li>
                                <li className="dots-item">We are fully transparent and don’t charge any upfront fee to
                                    Investors
                                </li>
                            </ul>
                        </div>
                        <div className="info-graph">
                            <div className="window1--description S7 S71 dot-list Advisor">
                                <p className="window1--description--button S7 P2-S7 Advisor">Senior Advisors</p>
                                <button
                                    className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg S7 S2 P2-S7">Apply
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
