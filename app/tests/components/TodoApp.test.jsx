var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add a todo to todos state on handleAddTodo', () => {
    var todoText = 'Testing a todo!';
    var todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle isComplete value when handleToggle is called', () => {
    var todoData = {
      id: 11,
      text: 'Test handleToggle',
      isComplete: false
    };
    var todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].isComplete).toBe(false);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].isComplete).toBe(true); 
  });
});