import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('Class click handler')
    }

    render() {
        return (
            <div>
                <button onClick= {this.clickHandler}>CLass button click</button>
            </div>
        )
    }
}

export default ClassClick
