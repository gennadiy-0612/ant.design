import "antd/dist/antd.css";
import './Screen6.css';
import peoples from "./img/peoples.png";

function App() {
    return (
        <div className="Screen6">
            <div className="window2 Screen6--w2 Screen5--w1 ant-col-12">
                <div className="dots Screen5--dots Screen6--dots"><img src={peoples}
                                                                       className="illustrate Screen5-img Screen6-img"
                                                                       alt="smile man"/></div>
            </div>
            <div className="window1 Screen6--w2 Screen5--w2 ant-col-12">
                <div className="Screen5--decription">
                    <h2 className="App-header-second-h2 Screen5--h2 head2 center">FOR INVESTORS</h2>
                    <h3 className="Sreen5--h3">Access unique<br/> investment opportunities</h3>
                    <div className="Screen5--description--content S6c">
                        <strong className="Screen5--strong">PROPRIETARY</strong>
                        <p className="Screen5--p">Access proprietary deals originated by our Senior Advisors</p>
                        <strong className="Screen5--strong">BILATERAL</strong>
                        <p className="Screen5--p">Negotiate and close deals on a bilateral basis</p>
                        <strong className="Screen5--strong">WIN-WIN</strong>
                        <p className="Screen5--p">View the deal pipeline and pay only for what you get</p>
                    </div>
                    <div className="window1--button-group Screen5--button-group S6bg">
                        <div className="window1--description">
                            <button className="login ant-btn ant-btn-primary S6bt first ant-btn-round ant-btn-lg">Join for Free</button>
                        </div>
                        <div className="window1--description">
                            <button className="login invert Screen5--button--text S6bt last ant-btn ant-btn-primary ant-btn-round ant-btn-lg">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
