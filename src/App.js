import React, {Component} from 'react'
import Person from './Person/person'
import './App.css'

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
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    }

    render () {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            cursor: 'pointeer'
        }
        return (
            <div className="App">

                {/* here i pass click hander to the function component Person */}
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!!!')}
                    changed={this.nameChangedHandler} />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />

                {/* Method 1: passing variable to switchNameHandler */}
                <button style = {style} onClick={() => this.switchNameHandler('Maximilian')}>
                    Switch Name
                </button>
            </div>
        )
    }
}

export default App
