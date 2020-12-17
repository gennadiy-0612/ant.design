import "antd/dist/antd.css";
import './Screen9.css';
import peoples from "./img/peoples.png";

function App() {
    return (
        <div className="Screen9">
            <span className="idn-img"></span>
            <ul className="foot-ul">
                <li className="foot-li foot-li-head">
                    Users
                </li>
                <li className="foot-li">
                    Investors
                </li>
                <li className="foot-li">
                    Senior Advisors
                </li>
            </ul>
            <ul className="foot-ul">
                <li className="foot-li foot-li-head">
                    Sectors
                </li>
                <li className="foot-li">
                    Sectors
                </li>
            </ul>
            <ul className="foot-ul">
                <li className="foot-li foot-li-head">
                    About
                </li>
                <li className="foot-li">
                    About Us
                </li>
                <li className="foot-li">
                    Terms & Conditions
                </li>
            </ul>
            <ul className="foot-ul">
                <li className="foot-li foot-li-head">
                    Contact
                </li>
                <li className="foot-li">
                    info@infradeals.net
                </li>
                <li className="foot-li">
                    + 23232323232
                </li>
                <li className="foot-li">
                    <span className="in"></span>
                </li>
            </ul>
        </div>
    );
}

export default App;
