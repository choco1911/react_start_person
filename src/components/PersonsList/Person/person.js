import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './person.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'


class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] Inside Constructor', props)
        this.inputElement = React.createRef()
    }

    componentWillMount () {
        console.log('[Person.js] Inside componentWillMount')
    }

    componentDidMount () {
        console.log('[Person.js] Inside componentDidMount')
        if (this.props.position === 0) {
            this.inputElement.current.focus()
        }
    }

    render () {
        console.log('[Person.js] Inside Render Method')
        return (
            <Aux>
                <div className="wrapper">
                    <p>I'm a {this.props.name} and I'm {this.props.age}</p>
                    <button className="del" onClick={this.props.click}>Delete</button>
                    {/* <p>{props.children}</p> */}
                </div>
                <input
                    ref = {this.inputElement}
                    type = "text"
                    onChange = {this.props.change}
                    value = {this.props.name} />
            </Aux>
        )
//        console.log('[Person.js] Inside this.props.children', this.props.children) // undefined
//        return [
//                <p key="1">I'm a {this.props.name} and I'm {this.props.age}</p>,
//                <p key="2">{this.props.children}</p>,
//                <button key="3" className="del" onClick={this.props.click}>Delete</button>,
//                <input key="4" type="text" onChange={this.props.change} value={this.props.name} />
//        ]
    }
}

Person.propTypes = {
        click: PropTypes.func,
        name: PropTypes.string,
        age: PropTypes.number,
        changed: PropTypes.func
}

export default withClass(Person, "Person")
