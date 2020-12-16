import "antd/dist/antd.css";
import './Screen2.css';
import bridge from "./img/window2-img.png";

function App() {
    return (
        <div className="Screen2 ant-row demo-row">
            <div className="window1 ant-col-12">
                <h1 className="window1-h">
                    The Infrastructure
                    Deals Network
                </h1>
                <p className="window1-descript">
                    The first deal origination platform for Private Equity
                    investments in infrastructure-related sectors
                </p>
                <div className="window1--button-group">
                    <div className="window1--description">
                        <p className="window1--description--button">
                            Senior Advisors
                        </p>
                        <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg">
                            Apply now
                        </button>
                    </div>
                    <div className="window1--description">
                        <p className="window1--description--button">
                            Investors
                        </p>
                        <button className="login invert ant-btn ant-btn-primary ant-btn-round ant-btn-lg">
                            Join now
                        </button>
                    </div>
                </div>
            </div>
            <div className="window2 ant-col-12">
                <div className="dots"><img src={bridge} className="illustrate" alt="bridge"/></div>
            </div>
        </div>
    );
}

export default App;
