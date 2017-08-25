var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid data', () => {
    var testInput =  'Add test coverage';
    var spy = expect.createSpy();
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = testInput;
    ReactTestUtils.Simulate.change(addTodo.refs.todoText);
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(testInput);
  });

  it('should not call onAddTodo prop if invalid data is input', () => {
    var testInput =  '';
    var spy = expect.createSpy();
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = testInput;
    ReactTestUtils.Simulate.change(addTodo.refs.todoText);
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});