import { Component } from 'react'

interface TodoProps {
    content: string;
    isDone: boolean;
    id: number
    handleDelete: (id: number) => void
}

export default class Todo extends Component<TodoProps> {
    render() {
        let { content, isDone, handleDelete, id } = this.props
        return (
            <div className="todo-item">
                <input type="checkbox" className="todo-checkbox" />
                {isDone ?
                    <span className="todo-text completed">{content}</span>
                    : <span className="todo-text">{content}</span>}
                <div className="todo-actions">
                    <button className="delete-btn" onClick={() => { handleDelete(id) }}>🗑️ Xóa</button>
                </div>
            </div>
        )
    }
}
