import React, {Component} from 'react'
import Person from './Person/person'

class App extends Component {
    render () {
        return (
            <div className="App">
                <Person name="Max" age="28"/>
                <Person name="Manu" age="29">My hobbies: racing</Person>
                <Person name="Stephanie" age="26"/>
            </div>
        )
    }
}

export default App
