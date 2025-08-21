import { Component } from 'react'

export default class Calculation extends Component {

    render() {
        function sum(firstNum: number, secondNum: number): number {
            return firstNum + secondNum
        }
        function subtract(firstNum: number, secondNum: number): number {
            return firstNum - secondNum
        }
        function multiply(firstNum: number, secondNum: number): number {
            return firstNum * secondNum
        }
        function divide(firstNum: number, secondNum: number): number {
            return firstNum / secondNum
        }
        return (
            <>
                <h1>Danh sách kết quả</h1>
                <ul>
                    <li>10 + 10 = {sum(10, 10)}</li>
                    <li>10 - 10 = {subtract(10, 10)}</li>
                    <li>10 * 10 = {multiply(10, 10)}</li>
                    <li>10 / 10 = {divide(10, 10)}</li>
                </ul>
            </>
        )
    }
}
