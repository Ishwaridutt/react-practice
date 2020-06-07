import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {props.greetHandler}>Greet Parent</button>

            {/* pass a parameter from child to parent */}
            <button onClick = {()=> props.greetHandler('child name is jhon')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
