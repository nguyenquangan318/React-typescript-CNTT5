import React, { Component } from 'react'
type State = {
    range: string
}

export default class Bai04 extends Component<{}>{
  render() {
    return (
      <div>
        <form>
            <p>Tiến độ hoàn thành:</p>
            <input type='range'></input><br></br>
            <input type='submit'></input>
        </form>
      </div>
    )
  }
}
