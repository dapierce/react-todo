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
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle todo to isComplete when handleToggle is called', () => {
    var todoData = {
      id: 11,
      text: 'Test handleToggle',
      createdAt: 0,
      isComplete: false,
      completedAt: undefined
    };
    var todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].isComplete).toBe(false);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].isComplete).toBe(true); 
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completedAt when isComplete toggles from true to false', () => {
    var todoData = {
      id: 23,
      text: 'Test isComplete',
      createdAt: 0,
      isComplete: true,
      completedAt: 100
    };
    var todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].completedAt).toBeA('number');
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].isComplete).toBe(false); 
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});