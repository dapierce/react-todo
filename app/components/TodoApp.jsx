var React = require('react');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowComplete = this.handleShowComplete.bind(this);
    this.state = {
      search: '',
      showCompleted: false,
      todos: [
        {
          id: 1,
          text: 'Feed the cat'
        }, {
          id: 2,
          text: 'Clean the kitchen'
        }, {
          id: 3,
          text: 'Cook something!'
        }, {
          id: 4,
          text: 'Make React Todo app'
        }
      ]
    }
  }
  handleSearch (search) {
    this.setState({search: search.toLowerCase()})
  }
  handleShowComplete (showCompleted) {
    this.setState({showCompleted: showCompleted})    
  }
  handleAddTodo (todoText) {
    var {todos} = this.state;
    todos.push({id: todos.length + 1, text: todoText});
    this.setState({todos: todos});
    console.log(todos[todos.length - 1]);
  }
  render () {
    var {todos} = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <TodoSearch onSearch={this.handleSearch} onShowComplete={this.handleShowComplete}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}

module.exports = TodoApp;