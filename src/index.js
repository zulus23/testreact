import React, {Component} from 'react';
import ReactDOM from 'react-dom'
class Test extends Component {
    render() {
        return (
            <div>
                <h2>My test1</h2>
            </div>
        );
    }
}

ReactDOM.render(<Test/>,document.getElementById("react-id"))
