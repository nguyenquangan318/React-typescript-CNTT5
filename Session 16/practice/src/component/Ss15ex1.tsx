import React, { Component } from 'react'
type State = {
    email: string
}

export default class Ss15ex1 extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            email: "",
        }
    }
    submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: e.target.value});
    }
    render() {

        return (
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }
}
