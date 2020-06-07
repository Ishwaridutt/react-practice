import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'React event Bind example Hello'
        }

        // approach 3
        // binding in constructor
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    // approach 1, 2, 3
    // clickHandler(){
    //     this.setState({
    //         message: 'React event Bind example Goodbye'
    //     })
    // }

    // approach 4
    // class properety as arrow functions
    clickHandler = () =>{
        this.setState({
            message: 'React event Bind example Goodbye'
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* this' keyword is undefined because this used with a function returns 'window' object on 
                the browser and 'global' object inside nodejs environment. Since 'react strict mode' is 
                enabled, it is returning 'undefined'. */}
                {/* <button onClick = {this.clickHandler}>Event bind example Hello</button> */}
                {/* // this way wworks finee but every update to the state will cost the component to re render
                , this inturn will generate brand new event handler on every render, impacting the performance */}
                {/* <button onClick = {this.clickHandler.bind(this)}>Event bind example Hello</button> */}
                {/* approach 2 */}
                {/* this also has performance implications, but easy to pass values */}
                {/* <button onClick = {() => this.clickHandler()}>Event bind example Hello</button> */}
                {/* approach 3 and 4, widely used */}
                <button onClick = {this.clickHandler}>Event bind example Hello</button>
            </div>
        )
    }
}

export default EventBind
