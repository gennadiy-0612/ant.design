import "antd/dist/antd.css";
import './Screen7.css';
import peoples from "./img/peoples.png";

function App() {
    return (
        <div className="Screen7">
            <h2 className="Screen7--h2">Why IDN?</h2>
            <p className="Screen7--p">Our unique platform is the first of its kind incentivizing independent Senior
                Executives to originate deals in a structured, innovative, and transparent way, creating an environment
                of trust, protecting & promoting the interests of all parties involved</p>
            <div className="back-color">
                <p className="normal App-p center cover">We cover all infrastructure-related sectors across Europe and
                    beyond </p>
                <p className="sectors">
                    <span className="sector one normal App-p center S7">CONNECTION</span>
                    <span className="sector two normal App-p center S7">OPPORTUNITY</span>
                    <span className="sector three normal App-p center S7">WIN-WIN</span>
                    <span className="sector four normal App-p center S7">TRUST</span>
                    <span className="sector five normal App-p center S7">SECURITY</span>
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
    );
}

export default App;
