import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from the child, ${childName}`);
    }
    
    render() {
        return (
            <div>
                {/* child calls the parent method */}
                {/* for this we pass the function reference as the prop to the child */}
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
