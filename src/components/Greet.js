import React from 'react'

function Greet(props){
    // evaluation {}
    return (
        <div>
            <h1> Hello {props.name} a.k.a {props.heroName} </h1>
            {props.children}
        </div>

    )
}

// default export
export default Greet

// named exports
// export const Greet = () =>{ <h1>Hello Ish</h1> }
