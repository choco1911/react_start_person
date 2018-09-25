import React, {Component} from 'react'
import Person from './Person/person'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age:28},
            {name: 'Manu', age:29},
            {name: 'Stephanie', age:26}
        ]
    }

    switchNameHandler = (newName) => {
//        console.log('Was clicked!');
        this.setState({
            persons: [
                {name: newName, age:28},
                {name: 'Manu', age:29},
                {name: 'Stephanie', age:27}
            ]
        })
    }

    render () {
        return (
            <div className="App">
                {/* Method 1: passing variable to switchNameHandler */}
                <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

                {/* here i pass click hander to the function component Person */}
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!!!')} />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        )
    }
}

export default App
