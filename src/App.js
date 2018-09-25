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

    switchNameHandler = () => {
//        console.log('Was clicked!');
        this.setState({
            persons: [
                {name: 'Maximilian', age:28},
                {name: 'Manu', age:29},
                {name: 'Stephanie', age:27}
            ]
        })
    }

    render () {
        return (
            <div className="App">
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
    }
}

export default App
