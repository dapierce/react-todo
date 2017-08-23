var React = require('react');

var TodoList = require('TodoList');

class TodoApp extends React.Component {
  constructor (props) {
    super(props);
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
  render () {
    var {todos} = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

module.exports = TodoApp;