var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoItem = require('TodoItem');

describe('TodoItem', () => {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should call onToggle prop with id when clicked', () => {
    var todoData = {
      id: 33,
      text: 'Testing',
      isComplete: true
    };
    var spy = expect.createSpy();
    var todoItem = ReactTestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoItem));
    
    ReactTestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todoData.id);
  });

});