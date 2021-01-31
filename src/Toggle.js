import React from "react";
import ReactDOM from 'react-dom';
import AdvisorPage from "./AdvisorPage";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            check: "checked"
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button type="checkbox" className="burger-shower" onClick={this.handleClick}>
                {this.state.isToggleOn ?
                    document.querySelector('body').setAttribute('class', 'hide') :
                    document.querySelector('body').setAttribute('class', 'vis')}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);
export default Toggle;



















