import { Component } from 'react'

interface StateType {
  name: string;
  email: string
}

export default class App extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props)
    this.state = {
      name: "default name",
      email: "default email"
    }
  }
  render() {
    const submit = (event: React.FormEvent) => {
      event.preventDefault()
      console.log("Form đã được submit");
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        [event.target.name]: event.target.value
      } as Pick<StateType, keyof StateType>)
    }
    return (
      <form onSubmit={submit}>
        <label>name:</label>
        <input type="text" name="name" value={this.state.name} onChange={handleChange} />
        <br />
        <label>email:</label>
        <input type="email" name="email" value={this.state.email} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
