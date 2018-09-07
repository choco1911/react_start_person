import React, {Component} from 'react'
import Person from './Person/person'
import './App.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
        const style = {
            backgroundColor: 'green',
            color: 'white'
        }
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                change={(event) => this.nameChangedHandler(event, person.id)}
                                />
                        </ErrorBoundary>
                    })}
                </div>
            )
            style.backgroundColor = 'red';
        }
    //    let  classes = ['red', 'bold'].join(' ')
        let  classes = []
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }


        return (
            <div className="App">

                <p className={classes.join(' ')}>This is really working!</p>
                {/* here i pass click hander to the function component Person */}
                {persons}
                {/* Method 1: passing variable to switchNameHandler
                <button className="toggle" style = {style} onClick={this.togglePersonsHandler}>
                */}
                <button
                    style = {style}
                    className="toggle" onClick={this.togglePersonsHandler}>
                    {this.state.showPersons ? "Close" : "Open"}
                </button>
            </div>

        )
    }
}

export default App
