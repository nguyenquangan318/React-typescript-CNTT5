import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const result = useSelector((data: any) => {
        return data
    })
  return (
    <div>
        <h1>Thông tin sinh viên</h1>
        <p>{result.id}</p>
        <p>Name: {result.name}</p>
        <p>Giới tính: {result.gender}</p>
        <p>Ngày sinh: {result.dateBirth}</p>
        <p>Địa chỉ: {result.address}</p>
    </div>
  )
}
