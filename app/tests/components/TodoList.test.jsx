var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one TodoItem component for each object in todos', () => {
    var todos = [{
      id: 1,
      text: 'first thing'
    }, {
      id: 2,
      text: 'second thing'
    }];
    var todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

    expect(todosComponents.length).toBe(todos.length);
  });
  
  it('should render empty message if no todos are shown', () => {
    var todos = [];
    var todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});