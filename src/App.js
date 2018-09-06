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
            ],
            showPersons: false
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        {/* setState merge specific values with state object */}
        this.setState({showPersons: !doesShow})
    }

    render () {
        const style = {
            marginBottom: '20px',
            backgroundColor: '#ffd54f',
            boxShadow: '0 2px 3px #000',
            font: 'inherit',
            cursor: 'pointeer'
        }

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
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
                </div>
            )
        }
        
        return (
            <div className="App">

                {/* here i pass click hander to the function component Person */}
                {persons}
                {/* Method 1: passing variable to switchNameHandler */}
                <button style = {style} onClick={this.togglePersonsHandler}>
                    {this.state.showPersons ? "Close" : "Open"}
                </button>
            </div>

        )
    }
}

export default App
