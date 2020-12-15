import h from './img/img.png';
import "antd/dist/antd.css";
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header ant-row demo-row">
                <div className="App-header-first App-header-first-col ant-col-12 demo-col demo-col-1">
                    <img src={h} className="first-col-img" alt="logo"/>
                </div>
                <div className="App-header-second demo-col demo-col-1">
                    <h2 className="App-header-second-h2">
                        WHAT WE OFFER
                    </h2>
                    <p>“IDN unleashes
                        the power of networking
                        and industry expertise
                        to give Private Equity infrastructure investors
                        what they want:</p>
                    <a
                        className="App-link"
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
