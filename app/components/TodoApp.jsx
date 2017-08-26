var React = require('react');
var uuid = require('uuid');

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
      todos: [
        {
          id: uuid(),
          text: 'Feed the cat',
          isComplete: true
        }, {
          id: uuid(),
          text: 'Clean the kitchen',
          isComplete: false          
        }, {
          id: uuid(),
          text: 'Cook something!',
          isComplete: false          
        }, {
          id: uuid(),
          text: 'Make React Todo app',
          isComplete: false          
        }
      ]
    }
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
    this.setState({search: search.toLowerCase()})
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
    var {todos} = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <TodoSearch onSearch={this.handleSearch} onShowComplete={this.handleShowComplete}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}

module.exports = TodoApp;