import Images from './Images/index';
import './css/maincss/MainPage.css';
import MainHeader from "./MainHeader";
import {BrowserRouter as Router} from "react-router-dom";
import MainFooter from "./MainFooter";
import {Link} from "react-router-dom";

function InvestorsPage(props) {

    return (
        <div className="page3 twofixed">
            <div className="First_Screen">
                <MainHeader />

                <div className="Screen2">
                    <div className="window1 P2 S2-P2">
                        <h1 className="main-header-second-h2 head2 P2 S2-P2">INVESTORS</h1>
                        <p className="window1-descript P2 S2-P2 page3">
                            Access proprietary deals <span className="main-post-link P2 S2-P2">originated by</span> a
                            selected network of Senior Advisors. Negotiate and close transactions <span
                            className="yellow-upper">bilaterally</span></p>
                        <div className="window1--button-group P2 P2-S2">
                            <div className="window1--description">
                                <Link className="login buttonIDN S2 big back-slider Screen2" to="/intro">Join now</Link></div>
                            <div className="window1--description">
                                <a href="#page3" className="login buttonIDN S2 big white Screen2 blue-back scroll-button P2">Learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                    <div className="window2">
                        <div className="dots P2-S2 topPhoto"><img src={Images.handsandnote} className="illustrate P2-S2"
                                                                  alt="bridge" /></div>
                    </div>
                </div>
            </div>

            <div id="page3" className="Screen4 P2 P2-S4 back-color">
                <h2 className="main-header-second-h2 head2 center P2-h2">WHO OUR</h2>
                <p className="main-post-link center frame4 P2 P2-S4">Investors are</p>
                <div className="idea">
                    <p className="normal main-p center cover P2 P2-S4">
                        Our investors are Senior professionals working at leading
                        Private Equity firms targeting infrastructure and related <span
                        className="main-post-link P2 third-screen third-line"> assets in Europe and beyond</span></p>
                    <div className="two-columns">
                        <p className="two-column--p">Through IDN’s platform, our investors originate and close <span
                            className="main-post-link P2 third-screen">unique investment</span> opportunities, ranging
                            from a minimum
                            of 10 million Euro up to a billion Euro.</p>
                        <p className="two-column--p">Our sweet spot is small cap and <span
                            className="main-post-link P2 third-screen">mid-market</span> but large cap transactions are also originated on our platform by our selected Senior Advisors</p>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S5dashed">
                <div className="window1 P2 P2-S5 hide320-600">
                    <div className="dots P2 P2-S5 odd dotted photo"><img src={Images.mannotebook} className="illustrate P2 odd" alt="bridge" /></div>
                </div>
                <div className="window2 P2 P2-S5 left-dashed">
                    <h2 className="main-header-second-h2 head2 P2">How IT WORKS</h2>
                    <p className="window1-h P2 P2-S5 added-element-before signUp">Sign Up</p>
                    <p className="window1-descript P2 added-element-before rounded-frame arrowsquare">Sign up for free and provide information about the deal opportunities you are interested in</p>
                    <p className="window1-descript P2 added-element-before rounded-frame papartext">Information include deal size, sectors of interest, geography of focus, etc</p>
                </div>
            </div>

            <div className="Screen6 P2 P2-S5dashed S6">
                <div className="window1 P2 P2-S6 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before P2-S5dashed">Get notified</p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame notificationdot">Get notified when
                        Senior Advisors originate relevant opportunities or assign origination mandates</p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame dotline favorite">
                        Review the opportunities originated by Advisors and submit expressions of interest</p>
                </div>
                <div className="window2 P2 P3-S61 hide320-600">
                    <div className="dots P2 S6-P2 dotted photo"><img className="illustrate P2 odd" src={Images.mannotephone} alt="bridge" /></div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7 hide320-600">
                    <div className="dots P2 P2-S7 odd odd1 dotted photo">
                        <img src={Images.businessmeeting} className="illustrate P2" alt="bridge" />
                    </div>
                </div>
                <div className="window2 P2 P2-S7 left-dashed">
                    <p className="window1-h P2 P2-S7 added-element-before connect">Connect</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame videocall">Discuss the
                        opportunities in full confidentiality and transparency. Arrange video calls and exchange
                        documents</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame target">
                        Get introduced to the target companies and start the due diligence</p>
                </div>
            </div>

            <div className="Screen6 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7 P2-S6 P2-S62 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before P2-S6">Close</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame process">Engage
                        Advisors to support you through the execution of the transactions</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame infrastructure">
                        Successfully close the investments bilaterally</p>
                </div>
                <div className="window2 P2 hide320-600">
                    <div className="dots P2 S6-P2 dotted photo"><img className="illustrate P2" src={Images.handshake} alt="bridge" /></div>
                </div>
            </div>

            <div className="S5-P2dots">
                <div className="Screen5 P2 P2-S72 P2-S53">
                    <div className="window1 P2 P2-S7 P2-S72 hide320-600">
                        <div className="dots P2 P2-S7 P2-S72 odd dotted photo"><img className="illustrate P2" src={Images.manbigsmile} alt="bridge" /></div></div>
                    <div className="window2 P2 P2-S72 left-dashed">
                        <p className="window1-h P2 P2-S72 added-element-before beyond">Beyond</p>
                        <p className="window1-descript P2 P2-S72 added-element-before rounded-frame suitcase beyond">Engage Senior
                            Advisors as NEDs, an interim C-levels, or via retainers to originate other investment opportunities</p>
                        <p className="window1-descript P2 P2-S72 added-element-before rounded-frame ipo beyond">Keep
                            originating new proprietary investment opportunities through IDN’s extensive network of Senior Advisors</p>
                    </div>
                </div>
            </div>

            <div className="common-info">
                <div className="Screen7 P2-S7-remade">
                    <h2 className="Screen7--h2 P2-S7-remade">Why IDN?</h2>
                    <p className="Screen7--p P2-S7-remade">IDN offers leading investors the unique opportunity to access proprietary deals originated by a selected network of Senior Advisors</p>
                    <div className="S7 P2-S7-remade">
                        <div className="sectors S7 P2-S7-remade">
                            <div className="info-graph">
                                <span className="sector one normal main-p center S7 P2-S7-remade">PROPRIETARY</span>
                                <ul className="dot-list">
                                    <li className="dots-item">IDN offers access to proprietary investment opportunities</li>
                                    <li className="dots-item">Our Senior Advisors source deals that are currently off-market</li>
                                </ul>
                            </div>
                            <div className="info-graph">
                                <span className="sector five normal main-p center S7 P2-S7-remade">TRUST</span>
                                <ul className="dot-list">
                                    <li className="dots-item">IDN provides a robust legal framework to the deal origination process</li>
                                    <li className="dots-item">We guarantee trust and confidentiality to all parties involved</li>
                                </ul>
                            </div>
                            <div className="info-graph">
                                <span className="sector COMMUNICATION normal main-p center S7 P2-S7-remade exchange-P3">BILATERAL</span>
                                <ul className="dot-list">
                                    <li className="dots-item">IDN offers access to bilateral investment opportunities</li>
                                    <li className="dots-item">Our Senior Advisors facilitate the closing of bilateral deals</li>
                                </ul>
                            </div>
                            <div className="info-graph">
                                <span className="sector two normal main-p center S7 P2-S7-remade communication-P3">COMMUNICATION</span>
                                <ul className="dot-list">
                                    <li className="dots-item">IDN’s intuitive dashboard guides Investors through the process</li>
                                    <li className="dots-item">We provide a number of tools that facilitate smooth communication with Advisors</li>
                                </ul>
                            </div>
                            <div className="info-graph">
                                <span className="sector five supp normal main-p center S7 P2-S7-remade winwin-P3">WIN-WIN</span>
                                <ul className="dot-list">
                                    <li className="dots-item">IDN’s success-base model is win-win</li>
                                    <li className="dots-item">We are fully transparent and don’t charge any upfront fee to Investors</li>
                                </ul>
                            </div>
                            <div className="info-graph">
                                <div className="window1--description S7 S71 dot-list Advisor">
                                    <p className="window1--description--button S7 P2-S7 Advisor">Investors</p>
                                    <Link className="login buttonIDN S2 big S2 P1-S7 back-slider why-idn" to="/intro">Join now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Screen8">
                <h2 className="Screen7--h2 S8">Do you want to learn more?</h2>
                <a href="mailto:info@infradeals.net" className="login buttonIDN S8 big white center back-slider white decide">Get in Touch</a>
            </div>

            <MainFooter />
        </div>
    )
}

export default InvestorsPage;