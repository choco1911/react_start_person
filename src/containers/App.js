import React, {Component} from 'react'
import Persons from '../components/PersonsList/PersonsList'
import Cockpit from '../components/Cockpit/Cockpit'
import './App.css'

class App extends Component {
    state = {
        persons: [
            {id: '001', name: 'Max', age:28},
            {id: '002', name: 'Manu', age:29},
            {id: '003', name: 'Stephanie', age:26}
        ]
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });

        const person = {
            ...this.state.persons[personIndex]
        }
{/*  alternative way
    const person = Object.assign({}, this.state.persons[personIndex]) */}
        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({ persons: persons })
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
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        showPersons={this.state.showPersons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            )
        }

        return (
            <div className="App">
                <Cockpit
                    persons={this.state.persons}
                    toggle={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                />
                {persons}
            </div>

        )
    }
}

export default App
