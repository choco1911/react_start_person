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

    componentWillReceiveProps (nextProps) {
        console.log('[Update PersonsList.js] Inside componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update PersonsList.js] Inside shouldComponentUpdate', nextProps, nextState)
        //return false
        return nextProps.persons !== this.props.persons
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('[Update PersonsList.js] Inside componentWillUpdate', nextProps, nextState)
    }
    
    componentDidUpdate () {
        console.log('[Update PersonsList.js] Inside componentDidUpdate')
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
