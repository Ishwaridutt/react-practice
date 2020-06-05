import React, { Component } from 'react'

class Message extends Component{

    // create a state object and initialize it
    // usually done inside constructor
    constructor(){
        // this is required to call component constructor
        super()
        // initialize state
        // state kind of reserved keyword inside react
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message