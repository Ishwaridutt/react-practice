// rce

import React, { Component } from 'react'

class Counter extends Component {

    // rconst
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }

    increase(){
        // count is increased everytime but UI is not being re-rendered after every state/component change
        // -- never modify state directly
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);

        // set state let the react to know to re render the component
        // calls to set state are async
        // so if we print it in console, it will print old value
        // to avoid that, use callback
        // -- if you want to execute a code which need to change after state change, use it in callback
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{
        //     console.log('call back value:', this.state.count)
        // })

        // so when you need to update something based on the previous state 
        // pass an callback instead of object, that callback will have an previous state value
        this.setState( (prevState, props) => ({
            count: prevState.count + 1
        }))
        
    }

    // react froup multiple set state calls into a single update for the better perfromance
    // so, all 5 set state calls are done in one single go and updated value does not carry 
    // over between different call

    increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }


    render() {
        return (
            <div>
                <h1>Count => {this.state.count} </h1>
                <button onClick={()=> this.increaseFive()}>Increment Count</button>
            </div>

        )
    }
}

export default Counter


