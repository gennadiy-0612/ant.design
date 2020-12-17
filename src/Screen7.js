import "antd/dist/antd.css";
import './Screen7.css';
import peoples from "./img/peoples.png";

function App() {
    return (
        <div className="Screen7">
            <h2 className="Screen7--h2">Why IDN?</h2>
            <p className="Screen7--p">Our unique platform is the first of its kind incentivizing independent Senior
                Executives to originate deals in a structured, innovative, and transparent way, creating an environment
                of trust,<br/> protecting & promoting the interests of all parties involved</p>
            <div className="back-color S7">
                <p className="sectors S7">
                    <span className="sector one normal App-p center S7">CONNECTION</span>
                    <span className="sector two normal App-p center S7">OPPORTUNITY</span>
                    <span className="sector three normal App-p center S7">WIN-WIN</span>
                    <span className="sector four normal App-p center S7">TRUST</span>
                    <span className="sector five normal App-p center S7">SECURITY</span>
                </p>
            </div>
            <div className="window1--button-group Screen5--button-group S7">
                <div className="window1--description S7 S71">
                    <p className="window1--description--button S7">Senior Advisors</p>
                    <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg S7">Apply now</button>
                </div>
                <div className="window1--description S7 S72">
                    <p className="window1--description--button S7 S72">Investors</p>
                    <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg S7">Join for Free</button>
                </div>
            </div>
        </div>
    );
}

export default App;
