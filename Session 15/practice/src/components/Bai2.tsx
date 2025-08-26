import React, { Component, type FormEvent } from 'react'
interface State{
    color: string,
    selectedColor: string
}
export default class Bai2 extends Component<object, State> {
    constructor(props: object){
        super(props)
        this.state = {
            color: "",
            selectedColor: ""
        }
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({selectedColor: event.target.value})
    }
    handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        this.setState({color: this.state.selectedColor})
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Color:{this.state.color}</h3>
        <br />
        <h4>Form</h4>
        <br />
        <label htmlFor="color">Mau sac</label>
        <br />
        <input type="color" name='color' onChange={this.handleChange} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
