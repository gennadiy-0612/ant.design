import Images from './Images/index';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            <div className="First_screen">
                <div className="Header">
                    <div className="Header--logo">
                        <a className="logo-link" href="/"><img className="idnlogo" src={Images.logo} alt="t"/></a>
                    </div>
                    <nav className="main-top-nav">
                        <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Senior Advisor</a>
                        <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Investors</a>
                        <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Sectors</a>
                        <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">About</a>
                    </nav>
                    <div className="login-block">
                        <a className="login buttonIDN back-slider">Login</a>
                    </div>
                </div>

                <div className="Screen2 P1-S2">
                    <div className="window1 Screen2 X12000 X1600">
                        <h1 className="window1-h X12000">
                            The Infrastructure
                            Deals Network
                        </h1>
                        <p className="window1-descript">
                            The first deal origination platform for Private Equity
                            investments in infrastructure-related sectors
                        </p>
                        <div className="window1--button-group P1-S2 S2 X1600">
                            <div className="window1--description">
                                <p className="window1--description--button">Senior Advisors</p>
                                <a className="login buttonIDN S2 big back-slider indent-bigger Screen2">Apply now</a>
                            </div>
                            <div className="window1--description">
                                <p className="window1--description--button">Investors</p>
                                <a className="login buttonIDN S2 big white back-slider Screen2 blue-back">Join
                                    now</a>
                            </div>
                        </div>
                    </div>
                    <div className="window2 X1600">
                        <div className="dots P1-S2"><img src={Images.bridge} className="illustrate Screen2"
                                                         alt="bridge"/>
                        </div>
                    </div>
                    <a className="chevron" href="/">
                        <img src={Images.arrowdown} className="chevron--down" alt="t"/>
                    </a>
                </div>
            </div>

            <div className="Screen3 main">
                <div className="main-header S3">
                    <div className="main-header-first">
                        <div className="main-header-dots dots hands">
                            <img src={Images.hands} className="first-col-img" alt="hands"/>
                        </div>
                    </div>
                    <div className="main-header-second S3">
                        <h2 className="main-header-second-h2 head2 S3">WHAT WE OFFER</h2>
                        <p className="main-p X1600">“IDN unleashes<br/>
                            the power of networking
                            and industry expertise<br/>
                            to give Private Equity infrastructure investors
                            what they want:</p>
                        <p className="main-post-link">Access to bilateral deals</p>
                    </div>
                </div>
            </div>

            <div className="Screen4">
                <h2 className="main-header-second-h2 head2 center">WHAT WE DO</h2>
                <p className="normal main-p center S4">IDN connects leading investment firms to proprietary investment
                    opportunities originated by a selected network of</p>
                <p className="main-post-link center frame4">Senior Advisors</p>
                <div className="back-color">
                    <p className="normal main-p center cover P2">We cover all infrastructure-related sectors across
                        Europe and beyond </p>
                    <p className="sectors S4">
                        <span className="sector one normal main-p center">Transport & Logistics</span>
                        <span className="sector two normal main-p center">Energy & Utilies</span>
                        <span className="sector three normal main-p center">Telecom & ICT</span>
                        <span className="sector four normal main-p center">Healthcare & Social</span>
                    </p>
                    <div className="Screen4--all center">
                        <a
                            className="selectors--all"
                            href="/">
                            View All Sectors
                        </a>
                    </div>
                </div>
            </div>

            <div className="Screen5 S5">
                <div className="window1 Screen5--w1">
                    <div className="Screen5--decription S51">
                        <h2 className="main-header-second-h2 Screen5--h2 head2 center">FOR SENIOR ADVISORS</h2>
                        <h3 className="Sreen5--h3 S5">Success fees up to<br/> 2 million Euro</h3>
                        <div className="Screen5--description--content">
                            <strong className="Screen5--strong S5">CONNECT</strong>
                            <p className="Screen5--p S5">Originate deals and connect to leading investors</p>
                            <strong className="Screen5--strong S5">ADVISE</strong>
                            <p className="Screen5--p S5">Introduce the parties and advise through the process</p>
                            <strong className="Screen5--strong S5">CLOSE</strong>
                            <p className="Screen5--p S5">Earn a success fee at deal closure and join the Board</p>
                        </div>
                        <div className="window1--button-group Screen5--button-group">
                            <div className="window1--description">
                                <a className="login buttonIDN S2 P1-S5 big back-slider font-size-scale">Apply now
                                </a>
                            </div>
                            <div className="window1--description">
                                <a className="login buttonIDN S2 P1-S5 big white back-slider">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="window2 Screen5--w2 ">
                    <div className="dots Screen5--dots"><img src={Images.smileman} className="illustrate Screen5-img S5"
                                                             alt="smile man"/></div>
                </div>
            </div>

            <div className="Screen6 S6">
                <div className="window2 Screen6--w2 Screen5--w1 S6">
                    <div className="dots Screen5--dots Screen6--dots"><img src={Images.people}
                                                                           className="illustrate Screen5-img Screen6-img"
                                                                           alt="smile man"/></div>
                </div>
                <div className="window1 Screen6--w2 Screen5--w2 S6">
                    <div className="Screen5--decription S5 S52">
                        <h2 className="main-header-second-h2 Screen5--h2 head2 center P1-S6">FOR INVESTORS</h2>
                        <h3 className="Sreen5--h3">Access unique<br/> investment opportunities</h3>
                        <div className="Screen5--description--content S6c">
                            <strong className="Screen5--strong P1-S6">PROPRIETARY</strong>
                            <p className="Screen5--p P1-S6">Access proprietary deals originated by our Senior
                                Advisors</p>
                            <strong className="Screen5--strong P1-S6">BILATERAL</strong>
                            <p className="Screen5--p P1-S6">Negotiate and close deals on a bilateral basis</p>
                            <strong className="Screen5--strong P1-S6">WIN-WIN</strong>
                            <p className="Screen5--p P1-S6">View the deal pipeline and pay only for what you get</p>
                        </div>
                        <div className="window1--button-group Screen5--button-group S6bg">
                            <div className="window1--description">
                                <a className="login buttonIDN big S2 back-slider back-slider-two">Join for Free</a>
                            </div>
                            <div className="window1--description">
                                <a className="login buttonIDN big S2 back-slider back-slider-two indent-bigger white border">Learn
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Screen7 S7">
                <h2 className="Screen7--h2 why">Why IDN?</h2>
                <p className="Screen7--p S7">Our unique platform is the first of its kind incentivizing independent
                    Senior
                    Executives to originate deals in a structured, innovative, and transparent way, creating an
                    environment
                    of trust,<br/> protecting & promoting the interests of all parties involved</p>
                <div className="back-color S7 P1-S7">
                    <p className="sectors S7">
                        <span className="sector one normal main-p center S7">CONNECTION</span>
                        <span className="sector two normal main-p center S7">OPPORTUNITY</span>
                        <span className="sector three normal main-p center S7">WIN-WIN</span>
                        <span className="sector four normal main-p center S7">TRUST</span>
                        <span className="sector five normal main-p center S7">SECURITY</span>
                    </p>
                </div>
                <div className="window1--button-group Screen5--button-group S7">
                    <div className="window1--description S7 S71">
                        <p className="window1--description--button S7">Senior Advisors</p>
                        <a className="login buttonIDN S2 big S2 P1-S7 back-slider back-slider-two font-size-scale sizes-scale why-idn">Apply
                            now
                        </a>
                    </div>
                    <div className="window1--description S7 S72">
                        <p className="window1--description--button S7 S72">Investors</p>
                        <a className="login buttonIDN S2 big S2 P1-S7 back-slider back-slider-two font-size-scale sizes-scale why-idn">Join
                            for Free</a>
                    </div>
                </div>
            </div>

            <div className="Screen8">
                <h2 className="Screen7--h2 S8 X1200">Do you want to learn more?</h2>
                <a className="login buttonIDN S8 big white center back-slider back-slider-two white decide font-size-scale">Get
                    in Touch</a>
            </div>

            <div className="Screen9 P1-S9 X1023">
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
