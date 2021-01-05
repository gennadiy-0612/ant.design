import Images from './Images/index';
import "antd/dist/antd.css";
import './MainPage.css';
import citymap from "./Images/page4/citymap.png";

function MainPage() {
    return (
        <div className="page5 twofixed">
            <div className="First_Screen">
                <div className="Header">
                    <div className="Header--logo X1024-1600">
                        <a className="logo-link" href="/"><img className="idnlogo top" src={Images.logo} alt="t"/></a>
                    </div>
                    <div className="top-horizon-menu X1024-1200 X1200-1600 ">
                        <nav className="main-top-nav">
                            <a className="main-top-nav-anchor active" href="/" rel="noopener noreferrer">Senior Advisor</a>
                            <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Investors</a>
                            <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">Sectors</a>
                            <a className="main-top-nav-anchor" href="/" rel="noopener noreferrer">About</a>
                        </nav>
                        <div className="login-block">
                            <a className="login buttonIDN back-slider top-login">Login</a>
                        </div>
                    </div>
                </div>

                <div className="Screen2 P5-S2">
                    <div className="window1 P2 S2-P2">
                        <h1 className="main-header-second-h2 head2 P2 S2-P2 P5-S2">MISSION</h1>
                        <p className="window1-descript P2 S2-P2 page3 P5-S2">We founded IDN to address an evident  <span className="main-post-link P2 S2-P2"> market gap: to </span> meet inverstors’ demand to
                            access proprietary, bilateral deals.<br/>
                            <span className="yellow-upper P5 P5-S2"> We just created the right incentives and conditions to stimulate the offer</span>
                        </p>
                    </div>
                    <div className="window2">
                        <div className="dots P2-S2 topPhoto"><img src={Images.topfivephoto} className="illustrate P2-S2" alt="bridge"/></div>
                    </div>
                </div>
            </div>
            <div className="grey">
                <div className="Screen6 S6 P1-S6 P5-S6 P5-S6">
                    <div className="window2 Screen6--w2 Screen5--w1 S6 P5-S6">
                        <div className="dots Screen5--dots Screen6--dots S6 P5-S6"><img src={Images.whoweare}
                                                                                  className="illustrate Screen5-img Screen6-img P5-S6"
                                                                                  alt="smile man"/></div>
                    </div>
                    <div className="window1 Screen6--w2 Screen5--w2 S6 P5-S6">
                        <div className="Screen5--decription S5 S52 P5-S6">
                            <h2 className="main-header-second-h2 Screen5--h2 head2 center P1-S6 P5-S6">Who we are</h2>
                            <div className="Screen5--description--content S6c P5-S6">
                                <p className="Screen5--p P1-S6 P5-S6">We are professional networkers</p>
                                <p className="Screen5--p P1-S6 P5-S6">We have deep knowledge of Private Equity and infrastructure Investments</p>
                                <p className="Screen5--p P1-S6 P5-S6">Our purpose is to create win-win situations:</p>
                                <strong className="wishes">Always</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-team">
                <h2 className="our-team-h2">
                    <strong className="our-team-strong">Our</strong>
                    <span className="our-team-span"> Team</span>
                </h2>
                <div className="avatars-collection">
                    <div className="photo-avatar">
                        <img src={Images.gautiersegouin} className="our-team-photo" alt="bridge"/>
                        <strong className="name-team-member">Gautier Segouin</strong>
                        <span className="specialist-type">Co-Founder & CCO</span>
                        <a className="linkedinlogo" href="/"></a>
                    </div>
                    <div className="photo-avatar">
                        <img src={Images.enricocattabiani} className="our-team-photo" alt="bridge"/>
                        <strong className="name-team-member">Enrico Cattabiani</strong>
                        <span className="specialist-type">Founder & CEO</span>
                        <a className="linkedinlogo" href="/"></a>
                    </div>
                    <div className="photo-avatar">
                        <img src={Images.vasiliysoshnikov} className="our-team-photo" alt="bridge"/>
                        <strong className="name-team-member">Vasiliy Soshnikov</strong>
                        <span className="specialist-type">Tech Advisor</span>
                        <a className="linkedinlogo" href="/"></a>
                    </div>
                </div>
                <p className="text-big text-S2-P4 P4 S2 center foot-head P5-our-team P5">IDN is backed by dozens of prominent Senior<br/> Executives and <span className="main-post-link P2 S2-P2 text-big text-S2-P4 P4 S2 center P5-our-team"> Private  Equity investors</span> across Europe!</p>
            </div>


            <div className="Screen8">
                <h2 className="Screen7--h2 S8 P4-S8">Do you want to learn more about our mission or our team?<br/>
                    our mission or our team?</h2>
                <a className="login buttonIDN S8 big white center back-slider back-slider-two white decide font-size-scale">Get
                    In touch</a>
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
                        <li className="foot-li opacity6"><a className="footA" href="mailto:info@infradeals.net">info@infradeals.net</a></li>
                        <li className="foot-li opacity6"><a className="footA" href="tel:+23232323232"> + 23232323232</a></li>
                        <li className="foot-li"><span className="in"></span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
