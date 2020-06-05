// need to import two things
import React, { Component } from 'react'


// two steps
// 1 extend Component
// 2 implement render method
class Welcome extends Component {
    render(){
        return <h1>Hello from Class Component, this is {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome