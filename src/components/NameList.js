import React, { Component } from 'react'

import Person from './Person'

class NameList extends Component {
    render() {
        let persons = [
            { id: 1, name: 'Bruce', age: 27, skill: 'Angular'},
            { id: 2, name: 'Ben', age: 17, skill: 'jQuery'},
            { id: 3, name: 'Clark', age: 36, skill: 'React'},
            { id: 4, name: 'Tom', age: 31, skill: 'Vue'}
        ]
        // spit the list into its own seperate component
        // pass the key as a prop to be used by React which is unique
        let personList = persons.map(person =>{ return <Person key={person.id} person={person}/>})
        return (
            <div>
                {personList}
            </div>
        )
    }
}

export default NameList
