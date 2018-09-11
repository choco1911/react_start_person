import React, {PureComponent} from 'react'
import Persons from '../components/PersonsList/PersonsList'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'
import './App.css'

export const AuthContext = React.createContext(false)

class App extends PureComponent {
    constructor(props) {
        super(props)
        console.log('[App.js] Inside Constructor', props)
    }

    componentWillMount () {
        console.log('[App.js] Inside componentWillMount')
    }

    componentDidMount () {
        console.log('[App.js] Inside componentDidMount')
    }

//    //shouldComponentUpdate(nextProps, nextState) {
//        console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState)
//    //    return true
//        return nextState.persons !== this.state.persons ||
//               nextState.showPersons !== this.state.showPersons
//    }

    componentWillUpdate (nextProps, nextState) {
        console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState)
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        console.log('[Update App.js] Inside getDerivedStateFromProps', nextProps, prevState)

        return prevState
    }

    getSnapshotBeforeUpdate () {
        console.log('[Update App.js] Inside getSnapshotBeforeUpdate')
    }

    componentDidUpdate () {
        console.log('[Update App.js] Inside componentDidUpdate')
    }


    state = {
        persons: [
            {id: '001', name: 'Max', age:28},
            {id: '002', name: 'Manu', age:29},
            {id: '003', name: 'Stephanie', age:26}
        ],
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
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
        {/* using immutable approuchES5 style */}
        {/* const persons = this.state.persons.slice() */}
        {/* using immutable approuch ES6 style spread operator */}
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        {/* setState merge specific values with state object */}
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
         })
    }

    loginHandler = () => {
        this.setState({authenticated: true})
    }

    render () {
        console.log('[App.js] Inside Render Method')
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
            <Aux>
                <button onClick={() => {this.setState({showPersons: 'true'})}}>Show Persons</button>
                <Cockpit
                    title = {this.props.title}
                    persons={this.state.persons}
                    toggle={this.togglePersonsHandler}
                    login={this.loginHandler}
                    showPersons={this.state.showPersons} />
                 <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
            </Aux>
        )
    }
}

export default withClass(App, "App")
