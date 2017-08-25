var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.state = {
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}

module.exports = TodoApp;