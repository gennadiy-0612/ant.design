import Images from './Images/index';
import './css/maincss/MainPage.css';
import MainHeader from "./MainHeader";
import {BrowserRouter as Router} from "react-router-dom";
import MainFooter from "./MainFooter";
import {Link} from "react-router-dom";
import vhSHCH from "./vh";

function AdvisorPage(props) {

    return (
        <div className="page2 twofixed">
            <div style={{ height: vhSHCH.setVh() }} className="First_Screen">
                <MainHeader />

                <div className="Screen2">
                    <div className="window1 P2 S2-P2">
                        <h1 className="main-header-second-h2 head2 P2 S2-P2">Senior Advisors</h1>
                        <p className="window1-descript P2 S2-P2 page2">Leverage your network and industry knowledge&nbsp;
                            <span className="main-post-link P2 S2-P2">to originate</span> proprietary investment
                            opportunities for <span className="yellow-upper">private equity investors</span></p>
                        <div className="window1--button-group P2 P2-S2">
                            <div className="window1--description"><a className="login buttonIDN S2 big back-slider Screen2">Apply now</a></div>
                            <div className="window1--description">
                                <a href="#page2" className="login buttonIDN S2 big white Screen2 blue-back scroll-button P2">Learn more</a></div>
                        </div>
                    </div>
                    <div className="window2">
                        <div className="dots P2-S2 topPhoto"><img src={Images.pagetop} className="illustrate P2-S2"
                                                                  alt="bridge" /></div>
                    </div>
                </div>
            </div>

            <div id="page2" className="Screen4 P2 P2-S4 back-color">
                <h2 className="main-header-second-h2 head2 center P2-h2">WHO OUR</h2>
                <p className="main-post-link center frame4 P2 P2-S4">Senior Advisors are</p>
                <div className="idea">
                    <p className="normal main-p center cover P2 P2-S4">Our Senior Advisors are independent senior executives across every infrastructure related sector
                        <span className="main-post-link P2 third-screen third-line">in Europe and beyond</span></p>
                    <div className="two-columns">
                        <p className="two-column--p"><span className="main-post-link P2 third-screen">To join our platform</span> they
                            have to demonstrate an extensive personal network of contacts with decision makers mixed
                            with in-depth industry knowledge.&#160;</p>
                        <p className="two-column--p">Most of them have a combination of both, making them ideally positioned to originate unique <span
                            className="main-post-link P2 third-screen">investment opportunities</span> for our
                            investors, advise them through the due diligence process, and join their portfolio companies
                            as NED</p>
                    </div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S5dashed">
                <div className="window1 P2 P2-S5 hide320-600">
                    <div className="dots P2 P2-S5 odd dotted photo"><img src={Images.attentionman}
                                                                         className="illustrate P2 odd" alt="bridge" />
                    </div>
                </div>
                <div className="window2 P2 P2-S5 left-dashed">
                    <h2 className="main-header-second-h2 head2 P2">How IT WORKS</h2>
                    <p className="window1-h P2 P2-S5 added-element-before signUp">Sign Up</p>
                    <p className="window1-descript P2 added-element-before rounded-frame global-network">Sign up and
                        stay connected to your industry network to identify M&A opportunities</p>
                    <p className="window1-descript P2 added-element-before rounded-frame bird">Receive mandates from
                        sellers to find investors or from investors to originate opportunities</p>
                </div>
            </div>

            <div className="Screen6 P2 P2-S5dashed S6">
                <div className="window1 P2 P2-S6 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before P2-S5dashed">Share</p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame chat">Confidentially
                        share on IDN details about
                        the investment opportunities you
                        identified</p>
                    <p className="window1-descript P2 S6-P2 added-element-before rounded-frame dotline">IDN
                        connects you to and let you screen investors interested
                        in your opportunities</p>
                </div>
                <div className="window2 P2 hide320-600">
                    <div className="dots P2 S6-P2 dotted photo"><img className="illustrate P2 odd"
                                                                     src={Images.manwithsmile} alt="bridge" /></div>
                </div>
            </div>

            <div className="Screen5 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7 hide320-600">
                    <div className="dots P2 P2-S7 odd odd1 dotted photo">
                        <img src={Images.handspeople} className="illustrate P2" alt="bridge" />
                    </div>
                </div>
                <div className="window2 P2 P2-S7 left-dashed">
                    <p className="window1-h P2 P2-S7 added-element-before connect">Connect</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame videocall">Select
                        investors, arrange video calls, and start
                        exchanging
                        documents safely</p>
                    <p className="window1-descript P2 P2-S7 added-element-before rounded-frame cursor">Introduce buyer
                        and seller and facilitate the negotiations
                        between the parties</p>
                </div>
            </div>

            <div className="Screen6 P2 P2-S7 P2-S5dashed">
                <div className="window1 P2 P2-S7 P2-S6 P2-S62 left-dashed">
                    <p className="window1-h P2 S6-P2 added-element-before P2-S6">Advise</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame process">Manage
                        the relations and advise throughout the due
                        diligence process</p>
                    <p className="window1-descript P2 S6-P2 S6-P22 added-element-before rounded-frame infrastructure">Earn
                        unparalleled success fees
                        at deal closure</p>
                </div>
                <div className="window2 P2 hide320-600">
                    <div className="dots P2 S6-P2 dotted photo"><img className="illustrate P2" src={Images.handspaper}
                                                                     alt="bridge" /></div>
                </div>
            </div>

            <div className="S5-P2dots">
                <div className="Screen5 P2 P2-S72 P2-S53">
                    <div className="window1 P2 P2-S7 P2-S72 hide320-600">
                        <div className="dots P2 P2-S7 P2-S72 odd dotted photo hide320-600"><img
                            className="illustrate P2" src={Images.handscross} alt="bridge" /></div>
                    </div>
                    <div className="window2 P2 P2-S72 left-dashed">
                        <p className="window1-h P2 P2-S72 added-element-before beyond">Beyond</p>
                        <p className="window1-descript P2 P2-S72 added-element-before rounded-frame suitcase beyond">Keep
                            working
                            with investors as a NED, an interim C-level,
                            or a
                            Senior Advisor on retainer</p>
                        <p className="window1-descript P2 P2-S72 added-element-before rounded-frame phonebook beyond">Keep
                            originating investment opportunities on IDN and
                            connect to
                            new investors </p>
                    </div>
                </div>
            </div>

            <div className="common-info">
                <div className="Screen7 P2-S7-remade">
                    <h2 className="Screen7--h2 P2-S7-remade">Why IDN?</h2>
                    <p className="Screen7--p P2-S7-remade">IDN offers Senior Advisors a unique incentive to originate
                        investment opportunities
                        for the world’s leading investors while also eliminating all frictions to the deal matching
                        process
                    </p>
                    <div className="S7 P2-S7-remade">
                        <div className="sectors S7 P2-S7-remade">
                            <div className="info-graph">
                                <span className="sector one normal main-p center S7 P2-S7-remade">CONNECTION</span>
                                <ul className="dot-list">
                                    <li className="dots-item">IDN connects Senior Advisors to dozens of leading
                                        investors
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
                                    <li className="dots-item">IDN provides a robust legal framework to the deal
                                        origination
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
                                    <li className="dots-item">IDN’s intuitive dashboard helps Advisors through the
                                        process
                                    </li>
                                    <li className="dots-item">We provide a number of tools that facilitates smooth
                                        communication with investors
                                    </li>
                                </ul>
                            </div>
                            <div className="info-graph">
                                <span className="sector two normal main-p center S7 P2-S7-remade">REMUNERATION</span>
                                <ul className="dot-list">
                                    <li className="dots-item">IDN has already negotiated the fee levels with investors
                                        on
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
                                    <li className="dots-item">IDN’s team is always available to support you step by step</li>
                                    <li className="dots-item">Share best practices in deal origination with our community of Senior Advisors</li>
                                </ul>
                            </div>
                            <div className="info-graph">
                                <div className="window1--description S7 S71 dot-list Advisor">
                                    <p className="window1--description--button S7 P2-S7 Advisor">Senior Advisors</p>
                                    <a className="login buttonIDN S2 big S2 P1-S7 back-slider why-idn">Apply
                                        now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Screen8">
                <h2 className="Screen7--h2 S8">Do you want to learn more?</h2>
                <a href="mailto:info@infradeals.net"
                   className="login buttonIDN S8 big white center back-slider white decide">Get in Touch</a>
            </div>

            <MainFooter />
        </div>
    )
}

export default AdvisorPage;
