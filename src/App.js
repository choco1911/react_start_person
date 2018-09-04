import React, {Component} from 'react'

class App extends Component {
    render () {
        return React.createElement('div', {className: 'App', style: {backgroundColor: 'red', width: '200px', textAlign: 'center'}},
            React.createElement('h1', {style: {color: 'greenyellow'}}, 'Kill em all!'))
    }
}

export default App
