import React, { Component } from 'react'
interface StateType {
    email: string;
}
export default class Bai1 extends Component<{},StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {email : ""};
    }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value })
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(this.state);

    }
    render() {
        return (
            <>
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label >
                        <input type='email' onChange={this.handleInput}>
                        </input>
                    </label>
                    <br />
                    <button type='submit'>Submit</button>
                </form>

            </>
        )
    }
}
