import { Component } from 'react'

interface TodoProps {
    content: string;
    isDone: boolean
}

export default class Todo extends Component<TodoProps> {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" className="todo-checkbox" />
                {this.props.isDone ?
                    <span className="todo-text completed">{this.props.content}</span>
                    : <span className="todo-text">{this.props.content}</span>}
                <div className="todo-actions">
                    <button className="delete-btn">🗑️ Xóa</button>
                </div>
            </div>
        )
    }
}
