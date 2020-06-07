import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : false
        }
    }
    
    render() {
        // approach 1
        // if(this.state.isLoggedIn){
        //     return (<div>Welcome Ish</div>)
        // }
        // else{
        //     return (<div>Welcome Guest</div>)
        // }

        // approach 2, using variables
        // let message = null;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Ish</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return (<div>{message}</div>)

        // approach 3, ternary operator
        // adv is it can be evaluated inside jsx
        return this.state.isLoggedIn ? (
            <div>Welcome Ish</div>
        ) :
        (
            <div>Welcome Guest</div>
        )

        // approach 4, short circuit operator
        // applicalble for case when you want to 
        // render in one case and do not want to render at all in other case
        // return this.state.isLoggedIn && <div>Welcome Ish</div>

        // return (
        //     <div>
        //         Welcome Ish
        //     </div>
        // )
    }
}

export default UserGreeting
