// rfce

import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('functional button clicked')
    }

    return (
        <div>
            <button onClick = {clickHandler} >functional button</button>
        </div>
    )
}

export default FunctionClick
