var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowComplete = this.handleShowComplete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      search: '',
      showCompleted: TodoAPI.getShowCompleted(),
      todos: TodoAPI.getTodos()
    }
  }
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
    TodoAPI.setShowCompleted(this.state.showCompleted);
  }
  handleToggle(id) {
    var updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        todo.completedAt = todo.isComplete ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({ todos: updateTodos });
  }
  handleSearch(search) {
    this.setState({ search: search })
  }
  handleShowComplete(showCompleted) {
    this.setState({ showCompleted: showCompleted })
  }
  handleAddTodo(todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoText,
          createdAt: moment().unix(),
          isComplete: false,
          completedAt: undefined
        }
      ]
    });
  }
  render() {
    var { todos, showCompleted, search } = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, search);

    return (
      <div class="root">
        <div className="top-bar">
          <h1 className="page-title hide-for-small-only">Todo</h1>
          <TodoSearch onSearch={this.handleSearch} onShowComplete={this.handleShowComplete} checkedShowCompleted={showCompleted} />
        </div>
        <div className="row main">
          <div className="column small-centered small-11 medium-8 large-7">
            <div className="container">
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="column small-centered small-11 medium-9 large-8">
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;