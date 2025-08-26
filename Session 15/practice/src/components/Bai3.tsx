import { Component } from 'react'
interface State {
    date: string;
}
export default class Bai3 extends Component<{}, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            date: ""
        }
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        Ngày sinh:
                    </label>
                    <input type="date" name="" id="" onChange={this.handleChange} />
                    <button type='submit'> Submit</button>
                </form>
            </div>
        )
    }
}
