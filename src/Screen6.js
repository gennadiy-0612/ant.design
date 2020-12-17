import "antd/dist/antd.css";
import './Screen6.css';
import smileman from "./img/smileman.png";

function App() {
    return (
        <div className="Screen5">
            <div className="window1 Screen5--w1 ant-col-12">
                <div className="Screen5--decription">
                    <h2 className="App-header-second-h2 Screen5--h2 head2 center">FOR SENIOR ADVISORS</h2>
                    <h3 className="Sreen5--h3">Success fees up to<br/> 2 million Euro</h3>
                    <div className="Screen5--description--content">
                        <strong className="Screen5--strong">CONNECT</strong>
                        <p className="Screen5--p">Originate deals and connect to leading investors</p>
                        <strong className="Screen5--strong">ADVISE</strong>
                        <p className="Screen5--p">Introduce the parties and advise through the process</p>
                        <strong className="Screen5--strong">CLOSE</strong>
                        <p className="Screen5--p">Earn a success fee at deal closure and join the Board</p>
                    </div>
                    <div className="window1--button-group Screen5--button-group">
                        <div className="window1--description">
                            <button className="login ant-btn ant-btn-primary ant-btn-round ant-btn-lg">Apply now
                            </button>
                        </div>
                        <div className="window1--description">
                            <button
                                className="login invert Screen5--button--text ant-btn ant-btn-primary ant-btn-round ant-btn-lg">Learn
                                more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="window2 Screen5--w2 ant-col-12">
                <div className="dots Screen5--dots"><img src={smileman} className="illustrate Screen5-img" alt="smile man"/></div>
            </div>
        </div>
    );
}

export default App;
