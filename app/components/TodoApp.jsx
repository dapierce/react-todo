var React = require('react');
var uuid = require('uuid');

var TodoAPI = require('TodoAPI');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowComplete = this.handleShowComplete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      search: '',
      showCompleted: false,
      todos: TodoAPI.getTodos()
    }
  }
  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
  }
  handleToggle (id) {
    var updateTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    this.setState({todos: updateTodos});
  }
  handleSearch (search) {
    this.setState({search: search})
  }
  handleShowComplete (showCompleted) {
    this.setState({showCompleted: showCompleted})    
  }
  handleAddTodo (todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoText,
          isComplete: false
        }
      ]      
    });
  }
  render () {
    var {todos, showCompleted, search} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, search);

    return (
      <div>
        <h1>Todo</h1>
        <TodoSearch onSearch={this.handleSearch} onShowComplete={this.handleShowComplete}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}

module.exports = TodoApp;