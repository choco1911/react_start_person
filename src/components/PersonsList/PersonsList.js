import React, {PureComponent} from 'react'
import Person from './Person/person'

class Persons extends PureComponent {
    constructor(props) {
        super(props)
        console.log('[PersonsList.js] Inside Constructor', props)
        this.lastPersonRef = React.createRef()
    }

    componentWillMount () {
        console.log('[PersonsList.js] Inside componentWillMount')
    }

    componentDidMount () {
        console.log('[PersonsList.js] Inside componentDidMount')
        this.lastPersonRef.current.focus()
    }

    componentWillReceiveProps (nextProps) {
        console.log('[Update PersonsList.js] Inside componentWillReceiveProps', nextProps)
    }

//    shouldcomponentupdate(nextprops, nextstate) {
//        console.log('[update personslist.js] inside shouldcomponentupdate', nextprops, nextstate)
        //return true
//        // if any of this props changes then trigger update
//        return nextprops.persons !== this.props.persons ||
//               nextprops.changed !== this.props.changed ||
//               nextprops.clicked !== this.props.clicked
//    }

    componentWillUpdate (nextProps, nextState) {
        console.log('[Update PersonsList.js] Inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate () {
        console.log('[Update PersonsList.js] Inside componentDidUpdate')
    }

    render () {
        console.log('[PersonsList.js] Inside Render Method')
        return this.props.persons.map((person, index) => {
            return <Person
                click = {() => this.props.clicked(index)}
                position = {index}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                ref = {this.lastPersonRef}
                change = {(event) => this.props.changed(event, person.id)}
                />
        })
    }

}

export default Persons
