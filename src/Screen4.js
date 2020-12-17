import "antd/dist/antd.css";
import './Screen4.css';
import truck from "./cssimg/delivery-truck.svg";

function App() {
    return (
        <div className="Screen4">
            <h2 className="App-header-second-h2 head2 center">WHAT WE DO</h2>
            <p className="normal App-p center">IDN connects leading investment firms to proprietary investment
                opportunities originated by a selected network of</p>
            <a
                className="App-post-link center frame4"
                href="/"
                rel="noopener noreferrer"
            >
                Senior Advisors
            </a>
            <div className="back-color">
                <p className="normal App-p center cover">We cover all infrastructure-related sectors across Europe and
                    beyond </p>
                <p className="sectors">
                    <span className="sector one normal App-p center">Transport & Logistics</span>
                    <span className="sector two normal App-p center">Energy & Utilies</span>
                    <span className="sector three normal App-p center">Telecom & ICT</span>
                    <span className="sector four normal App-p center">Healthcare & Social</span>
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
