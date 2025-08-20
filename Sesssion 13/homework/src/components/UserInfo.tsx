import { Component } from 'react'

export default class UserInfo extends Component {
    render() {
        let user = {
            name: "Nguyễn Văn A",
            gender: "Nam",
            dob: "06/03/2024",
            email: "nva@gmail.com",
            address: "Thanh Xuân, Hà Nội"
        }
        return (
            <>
                <h1>Thông tin cá nhân</h1>
                <ul>
                    <li>Họ và tên: <b>{user.name}</b></li>
                    <li>Giới tính: <b>{user.gender}</b></li>
                    <li>Ngày sinh: <b>{user.dob}</b></li>
                    <li>Email: <b>{user.email}</b></li>
                    <li>Địa chỉ: <b>{user.address}</b></li>
                </ul>
            </>
        )
    }
}
