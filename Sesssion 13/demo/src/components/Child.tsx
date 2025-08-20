import { Component } from 'react'

interface ChildProps {
    name: string
    age?: number
    children: React.ReactNode
}

export default class Child extends Component<ChildProps> {
    static defaultProps = {
        age: 10
    }
    render() {
        return (
            <>{true && <h1>đây là conditional rendering</h1>}

            </>
        )
    }
}
