import Images from './Images/index';
import "antd/dist/antd.css";
import './MainPage.css';
import citymap from "./Images/page4/citymap.png";

function MainPage() {
    return (
        <div className="page4 twofixed">
            <div className="First_Screen">
                <div className="Header">
                    <div className="Header--logo X1024-1600">
                        <a className="logo-link" href="/"><img className="idnlogo top" src={Images.logo} alt="t"/></a>
                    </div>
                    <div className="top-horizon-menu X1024-1200 X1200-1600 ">
                        <nav className="main-top-nav">
                            <a className="main-top-nav-anchor active" href="/" rel="noopener noreferrer">Senior
                                Advisor</a>
                            <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Investors</a>
                            <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Sectors</a>
                            <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">About</a>
                        </nav>
                        <div className="login-block">
                            <a className="login buttonIDN back-slider top-login">Login</a>
                        </div>
                    </div>
                </div>

                <div className="Screen2">
                    <div className="window1 P2 S2-P2">
                        <h1 className="main-header-second-h2 head2 P2 S2-P2">SECTORS</h1>
                        <p className="window1-descript P2 S2-P2 page3">Private Equity infrastructure investment nowadays goes
                            <span className="main-post-link P2 S2-P2"> far beyond </span> roads and
                            airports. It can be any defensible business generating <span className="yellow-upper">stable returns</span></p>
                        <div className="window1--button-group P2 P2-S2">
                            <div className="window1--description"><a href="#page4" className="login buttonIDN S2 big white Screen2 blue-back scroll-button P2 P4-S2">Learn more</a></div>
                        </div>
                    </div>
                    <div className="window2">
                        <div className="dots P2-S2 topPhoto"><img src={Images.citymap} className="illustrate P2-S2"
                                                                  alt="bridge"/></div>
                    </div>
                </div>
            </div>

            <div id="page4" className="S2-P4">
                <div className="two-explain Screen2 max-width1600">
                    <div className="window-right">
                        <div className="dots P2-S2 topPhoto P4-S2"><img src={Images.ways}
                                                                        className="illustrate P2-S2 P4-S3-img max-width1850"
                                                                        alt="bridge"/></div>
                    </div>
                    <div className="window-left max-width1650">
                        <h2 className="main-header-second-h2 head2 P2 S2-P2 P4-S3-H2">YESTERDAY</h2>
                        <h3 className="head3 P4-S2">What was Infrastructure?</h3>
                        <p className="text-extending">By definition, Infrastructures are assets that provide essential
                            services to society. Traditional infrastructure assets, classified as “Core” infrastructure,
                            encompass transportation (e.g. airports, ports, roads), energy (e.g. O&G infrastructure),
                            utilities (e.g. electricity networks), telecommunication (e.g. telecom towers), and “social
                            infrastructure” (e.g. schools, hospitals).</p>
                        <p className="text-extending">“Core” assets typically operate on a monopolistic basis due to
                            regulation or concession, and therefore present a very low risk profile. For this reasons
                            institutions such as pension funds have pioneered investments in this asset class due to the
                            low but stable returns that “core” infrastructure assets typically guarantee
                        </p>
                    </div>
                </div>
            </div>

            <div className="two-explain Screen2 P2-S3">
                <div className="window-left P4-S3 max-width1650">
                    <h2 className="main-header-second-h2 head2 P2 S2-P2 P4-S3">TODAY</h2>
                    <h3 className="head3 S2-P2 P4-S3">What is Infrastructure?</h3>
                    <p className="text-extending">
                        In recent years however, the definition of infrastructure has expanded dramatically and
                        investment in the asset class have boomed. In fact, an increasing number of Private Equity firms
                        have entered the game by expanding the investment scope from “core” to “core plus”, “value
                        added”, and “opportunistic” investments, embracing a plethora of new sectors and businesses
                        reflecting higher risk profiles and returns.</p>
                    <p className="text-extending">
                        Yet, the underlying characteristics of infrastructure investments remain similar: investors are
                        still looking for opportunities in low-competitive markets, with high entry barriers and few
                        associated risks, with business models centered on fairly long-term and sticky contracts. As
                        competition intensifies and new “non-core” sectors become of interest, the need of investors to
                        uncover investment opportunities in known and unknown sectors becomes paramount.
                    </p>
                </div>
                <div className="window-right P4-S3">
                    <div className="dots P2-S2 topPhoto P4-S2 P4-S3"><img src={Images.infra}
                                                                    className="illustrate P2-S2 P4-S3-img max-width1850 P4-two-exp1"
                                                                    alt="bridge"/></div>
                </div>
            </div>
            <div className="S2-P4">
                <div className="wrapper max-width1650">
                    <p className="text-big text-S2-P4 P4 S2 center width800">IDN <span
                        className="main-post-link P2 S2-P2 text-big text-big text-S2-P4 P4 S2">covers</span> all core
                        and non-core infrastructure sectors.</p>
                    <div className="visualtextinfo max-width1600">
                        <div className="cail">
                            <img className="info-vis" src={Images.track} alt="alt"/>
                            <h3 className="header h3-P4">Transport & Logistics</h3>
                            <ul className="ul-P4">
                                <li className="item h3-P4">Ports</li>
                                <li className="item h3-P4">Airports</li>
                                <li className="item h3-P4">Roads, Rail</li>
                                <li className="item h3-P4">Logistics</li>
                                <li className="item h3-P4">Storage</li>
                                <li className="item h3-P4"> Last mile</li>
                            </ul>
                        </div>
                        <div className="cail">
                            <img className="info-vis" src={Images.powerlines} alt="alt"/>
                            <h3 className="header h3-P4">Utilities</h3>
                            <ul className="ul-P4">
                                <li className="item h3-P4">Electrity</li>
                                <li className="item h3-P4">Gas</li>
                                <li className="item h3-P4">Water</li>
                                <li className="item h3-P4">Waste</li>
                                <li className="item h3-P4">Recycling</li>
                                <li className="item h3-P4">Alternatives</li>
                            </ul>
                        </div>
                        <div className="cail">
                            <img className="info-vis" src={Images.sunbettery} alt="alt"/>
                            <h3 className="header h3-P4">Energy</h3>
                            <ul className="ul-P4">
                                <li className="item h3-P4">Oil & Gas</li>
                                <li className="item h3-P4">Nuclear & Coal</li>
                                <li className="item h3-P4"> Renewable</li>
                                <li className="item h3-P4">Biomass, Biogas</li>
                                <li className="item h3-P4">Hydrogen</li>
                                <li className="item h3-P4">New Energy</li>
                            </ul>
                        </div>
                        <div className="cail">
                            <img className="info-vis" src={Images.antena} alt="alt"/>
                            <h3 className="header h3-P4">Telecom & ICT</h3>
                            <ul className="ul-P4">
                                <li className="item h3-P4">Fixed Networks</li>
                                <li className="item h3-P4">Wireless</li>
                                <li className="item h3-P4">Data Storage</li>
                                <li className="item h3-P4">ICT</li>
                                <li className="item h3-P4">Radio</li>
                                <li className="item h3-P4">Satellites</li>
                            </ul>
                        </div>
                        <div className="cail">
                            <img className="info-vis" src={Images.citysunset} alt="alt"/>
                            <h3 className="header h3-P4">Green & Infratech</h3>
                            <ul className="ul-P4">
                                <li className="item h3-P4">Cleantech</li>
                                <li className="item h3-P4">Circular Economy</li>
                                <li className="item h3-P4">IoT & Infratech</li>
                                <li className="item h3-P4">Smart Energy</li>
                                <li className="item h3-P4">Smart Mobility</li>
                                <li className="item h3-P4">Smart Cities</li>
                            </ul>
                        </div>
                        <div className="cail">
                            <img className="info-vis" src={Images.otherfield} alt="alt"/>
                            <h3 className="header h3-P4">Other Sectors</h3>
                            <ul className="ul-P4">
                                <li className="item h3-P4">Agricolture</li>
                                <li className="item h3-P4">Chemicals</li>
                                <li className="item h3-P4">Education</li>
                                <li className="item h3-P4">Healthcare</li>
                                <li className="item h3-P4">Housing</li>
                                <li className="item h3-P4">Social</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-big text-S2-P4 P4 S2 center foot-head">Help us expand to <span
                        className="main-post-link P2 S2-P2 text-big text-S2-P4 P4 S2 center"> new ones</span>!</p>
                </div>
            </div>

            <div className="Screen8">
                <h2 className="Screen7--h2 S8 P4-S8">Not sure whether your sector, deal,<br/>
                    or investment’s scope can be aligned to IDN’s focus? </h2>
                <a className="login buttonIDN S8 big white center back-slider back-slider-two white decide font-size-scale">Ask us</a>
            </div>

            <div className="Screen9 P1-S9 X1023">
                <span className="idn-img"></span>
                <div className="foot-lists">
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">Users</li>
                        <li className="foot-li opacity6">Investors</li>
                        <li className="foot-li opacity6">Senior Advisors</li>
                    </ul>
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">Sectors</li>
                        <li className="foot-li opacity6">Sectors</li>
                    </ul>
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">About</li>
                        <li className="foot-li opacity6">About Us</li>
                        <li className="foot-li opacity6">Terms & Conditions</li>
                    </ul>
                    <ul className="foot-ul">
                        <li className="foot-li foot-li-head">Contact</li>
                        <li className="foot-li opacity6"><a className="footA"
                                                            href="mailto:info@infradeals.net">info@infradeals.net</a>
                        </li>
                        <li className="foot-li opacity6"><a className="footA" href="tel:+23232323232"> + 23232323232</a>
                        </li>
                        <li className="foot-li"><span className="in"></span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
