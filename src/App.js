import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>Hello React Redux</div>
        )
    }
}

let root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

ReactDOM.render(<App/>, document.getElementById('root'));