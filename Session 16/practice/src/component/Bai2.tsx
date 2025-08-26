import React, { Component } from 'react'
type State={
    color:string
    ipColor:string

}
export default class Bai2 extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state={
            color:`#14141`,
            ipColor:""
        }
    }

    handleColor=(e:React.ChangeEvent<HTMLInputElement>)=>{
       this.setState({
        
        ipColor:e.target.value
       })
    }

    submit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log(this.state);
        }
    
  render() {
    return (

      <div>
        <form action="" onSubmit={this.submit}>
            <h1>Color:{this.state.ipColor}</h1>
            <h2>FORM</h2>
            <input type="color" onChange={this.handleColor}   />
            <button>submit</button>
        </form>
        
      </div>
    )
  }
}
