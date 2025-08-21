import { Component } from 'react'
import Todo from './components/Todo';

interface TodoType {
  id: number;
  content: string;
  isDone: boolean
}
interface TodosState {
  todos: TodoType[]
  inputTodo: string
}
export default class App extends Component<{}, TodosState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          content: "Đây là công việc 1",
          isDone: true
        },
        {
          id: 1,
          content: "Đây là công việc 2",
          isDone: false
        },
        {
          id: 2,
          content: "Đây là công việc 3",
          isDone: false
        }
      ],
      inputTodo: ""
    }
  }
  render() {
    let { todos, inputTodo } = this.state
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ inputTodo: event.target.value })
    }
    const addTodo = () => {
      this.setState({
        todos: [...todos,
        {
          id: todos.length,
          content: inputTodo,
          isDone: false
        }
        ]
      })
    }
    const deleteTodo = (id: number): void => {
      this.setState({
        todos: todos.filter((todo) => todo.id != id)
      })
    }
    return (
      <>
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1>📝 TodoList</h1>
            <p>Quản lý công việc hiệu quả</p>
          </div>
          {/* Input Section */}
          <div className="input-section">
            <div className="input-group">
              <input
                type="text"
                className="task-input"
                placeholder="Nhập công việc cần làm..."
                maxLength={100}
                onChange={handleInput}
              />
              <button className="add-btn" onClick={addTodo}>➕ Thêm</button>
            </div>
            <div className="error-message">{/* Thông báo lỗi sẽ hiển thị ở đây */}</div>
          </div>
          {/* Empty State */}
          {todos.length === 0 ? <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <div className="empty-state-text">Chưa có công việc nào</div>
            <div className="empty-state-subtext">
              Hãy thêm công việc đầu tiên của bạn!
            </div>
          </div> : <div className="todo-list">
            {/* Todo List */}
            {todos.map((todo) => {
              return <Todo id={todo.id} key={todo.id} content={todo.content} isDone={todo.isDone} handleDelete={deleteTodo}></Todo>
            })}
          </div>}
          {/* Footer */}
          <div className="footer">
            <div className="task-counter">
              Đã hoàn thành: <span className="counter-number">{todos.filter((todo) => todo.isDone).length}</span> /
              <span className="counter-number">{todos.length}</span> công việc
            </div>
          </div>
        </div >

      </>
    )
  }
}
