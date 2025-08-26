import React, { Component } from 'react'
//B1: Tao giao dien
//B2: Xay dung kieu du lieu cho prop va state
interface State {
    name: string;
    email: string;
    age: number;
    error: string;
}
//B3: Xay dung ham de nhan gia tri trong cac o input
//B4: Xay dung ham de submit form
//B5: Gan su kien va kiem tra ket qua
export default class Form extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: '',
            email: '',
            age: -1,
            error: ''
        }
    }
    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!this.state.email.includes("@")) {
            this.setState({
                error: "Email không hợp lệ"
            })
        } else if (Number(this.state.age) < 0) {
            this.setState({
                error: "Tuổi không được âm"
            })
        } else {
            this.setState({
                error: ""
            })
        }
        console.log(this.state);

    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h1>Nhập thông tin người dùng</h1>
                <input type="text" name="name" placeholder='Họ tên' onChange={this.handleInput} /><br />
                <input type="text" name="email" placeholder='Email' onChange={this.handleInput} /><br />
                <input type="number" name="age" placeholder='Tuổi' onChange={this.handleInput} /><br />
                <button type='submit'>Gửi</button>
                <button>Xóa tất cả</button>
                {this.state.error && <p>{this.state.error}</p>}
            </form>
        )
    }
}
