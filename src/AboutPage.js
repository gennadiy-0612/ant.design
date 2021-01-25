import Images from './Images/index';
import './css/maincss/MainPage.css';
import MainHeader from "./MainHeader";
import {BrowserRouter as Router} from "react-router-dom";
import MainFooter from "./MainFooter";

function AboutPage(props) {

    return (
        <div className="page5 twofixed">
            <div className="First_Screen">
                <MainHeader />

                <div className="Screen2 P5-S2">
                    <div className="window1 P2 S2-P2">
                        <h1 className="main-header-second-h2 head2 P2 S2-P2 P5-S2">MISSION</h1>
                        <p className="window1-descript P2 S2-P2 page3 P5-S2">We founded IDN to address an evident  <span className="main-post-link P2 S2-P2"> market gap: </span> to meet inverstors’ demand to
                            access proprietary, bilateral deals.<br />
                            <span className="yellow-upper P5 P5-S2"> We just created the right incentives and conditions to stimulate the offer</span>
                        </p>
                    </div>
                    <div className="window2">
                        <div className="dots P2-S2 topPhoto"><img src={Images.topfivephoto} className="illustrate P2-S2" alt="bridge" /></div>
                    </div>
                </div>
            </div>

            <div className="grey">
                <div className="Screen6 S6 P1-S6 P5-S6 P5-S6">
                    <div className="window2 Screen6--w2 Screen5--w1 S6 P5-S6">
                        <div className="dots Screen5--dots Screen6--dots S6 P5-S6"><img src={Images.whoweare}
                                                                                        className="illustrate Screen5-img Screen6-img P5-S6"
                                                                                        alt="smile man" /></div>
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
                        <img src={Images.gautiersegouin} className="our-team-photo" alt="bridge" />
                        <strong className="name-team-member">Gautier Segouin</strong>
                        <span className="specialist-type">Co-Founder & CCO</span>
                        <a className="linkedinlogo" href="https://www.linkedin.com/in/gautier-segouin-defrancois-57645855/" target="_blank"></a>
                    </div>
                    <div className="photo-avatar">
                        <img src={Images.enricocattabiani} className="our-team-photo" alt="bridge" />
                        <strong className="name-team-member">Enrico Cattabiani</strong>
                        <span className="specialist-type">Founder & CEO</span>
                        <a className="linkedinlogo" href="https://www.linkedin.com/in/enrico-cattabiani-73641780/" target="_blank"></a>
                    </div>
                    <div className="photo-avatar">
                        <img src={Images.vasiliysoshnikov} className="our-team-photo" alt="bridge" />
                        <strong className="name-team-member">Vasiliy Soshnikov</strong>
                        <span className="specialist-type">Tech Advisor</span>
                        <a className="linkedinlogo" href="https://www.linkedin.com/in/vasiliy-soshnikov-76722783/" target="_blank"></a>
                    </div>
                </div>
                <p className="text-big text-S2-P4 P4 S2 center foot-head P5-our-team P5">IDN is backed by dozens of prominent <span className="main-post-link P2 S2-P2 text-big text-S2-P4 P4 S2 center P5-our-team"> Senior Executives</span> across Europe</p>
            </div>

            <div className="Screen8">
                <h2 className="Screen7--h2 S8 P4-S8">Do you want to learn more about<br />
                    our mission or our team?</h2>
                <a href="mailto:info@infradeals.net" className="login buttonIDN S8 big white center back-slider white decide">Get In touch</a>
            </div>

            <MainFooter />
        </div>
    )
}

export default AboutPage;
