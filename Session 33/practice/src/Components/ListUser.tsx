import React from 'react'
import { useSelector } from 'react-redux'

export default function ListUser() {
    const result = useSelector((data: any) => {
        console.log(data);

        return data
    })
    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <td>id</td>
                        <td>tên</td>
                        <td>giới tính</td>
                        <td>ngày sinh</td>
                        <td>địa chỉ</td>
                        <td>chức năng</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{result.name}</td>
                        <td>{result.gender}</td>
                        <td>{result.dateBirth}</td>
                        <td> {result.address}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
