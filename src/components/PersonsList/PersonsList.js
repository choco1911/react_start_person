import React, {Component} from 'react'
import Person from './Person/person'

class Persons extends Component {
    constructor(props) {
        super(props)
        console.log('[PersonsList.js] Inside Constructor', props)
    }

    componentWillMount () {
        console.log('[PersonsList.js] Inside componentWillMount')
    }

    componentDidMount () {
        console.log('[PersonsList.js] Inside componentDidMount')
    }

    render () {
        console.log('[PersonsList.js] Inside Render Method')
        return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
                />
        })
    }

}

export default Persons
