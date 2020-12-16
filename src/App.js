import h from './img/hands.png';
import "antd/dist/antd.css";
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header ant-row demo-row">
                <div className="App-header-first App-header-first-col ant-col-12 demo-col demo-col-1">
                    <div className="App-header-dots dots">
                        <img src={h} className="first-col-img" alt="hands"/>
                    </div>
                </div>
                <div className="App-header-second demo-col demo-col-1">
                    <h2 className="App-header-second-h2">
                        WHAT WE OFFER
                    </h2>
                    <p className="App-p">“IDN unleashes<br/>
                        the power of networking
                        and industry expertise<br/>
                        to give Private Equity infrastructure investors
                        what they want:</p>
                    <a
                        className="App-post-link"
                        href="/"
                        rel="noopener noreferrer"
                    >
                        Access to bilateral deals
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
