import React, {Component} from 'react'
import Person from './Person/person'
import './App.css'

class App extends Component {
    state = {
        persons: [
            {id: '001', name: 'Max', age:28},
            {id: '002', name: 'Manu', age:29},
            {id: '003', name: 'Stephanie', age:26}
        ]
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

    deletePersonHandler = (personIndex) => {
        {/* using immutable approuch ES5 style */}
        {/* const persons = this.state.persons.slice() */}
        {/* using immutable approuch ES6 style spread operator */}
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
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
                    {this.state.persons.map((person, index) => {
                        return <Person click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                />
                    })}
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
