import React, {Component} from 'react'

// High order func component
// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// High order class component
// If you need to manage life cycle hook
const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    })
}

export default withClass
