import React from 'react'
import Person from './Person'

function NameList() {
    const apps = ['Facebook', 'Amazon', 'Netflix', 'Hotstar', 'Instagram']
    const persons = [
        {
            id: 1,
            name: 'Aaryaman',
            age: 22,
            skill: 'Python'
        },
        {
            id: 2,
            name: 'Naman',
            age: 28,
            skill: 'ios'
        },
        {
            id: 3,
            name: 'Vedant',
            age: 22,
            skill: 'Machine Learning'
        }
    ]


    const applist = apps.map(app => <h2>{app}</h2>)
    const personList = persons.map(person => (
        <Person key={person.id} person={person}></Person>
    ))
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
