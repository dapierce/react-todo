var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

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
      showCompleted: TodoAPI.getShowCompleted(),
      todos: TodoAPI.getTodos()
    }
  }
  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
    TodoAPI.setShowCompleted(this.state.showCompleted);
  }
  handleToggle (id) {
    var updateTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
        todo.completedAt = todo.isComplete ? moment().unix() : undefined;
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
          createdAt: moment().unix(),          
          isComplete: false,
          completedAt: undefined
        }
      ]      
    });
  }
  render () {
    var {todos, showCompleted, search} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, search);

    return (
      <div>
        <div className="row">
          <div className="column small-centered small-11 medium 6 large-5">
          <h1 className="page-title">Todo</h1>
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} onShowComplete={this.handleShowComplete} checkedShowCompleted={showCompleted}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;