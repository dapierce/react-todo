var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'cat';
    var spy = expect.createSpy();
    var todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    ReactTestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(searchText);    
  });

  it('should call onShowComplete with correct checkbox value', () => {
    var spy = expect.createSpy();
    var todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onShowComplete={spy}/>);

    todoSearch.refs.showCompleted.checked = false;
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(false);

    todoSearch.refs.showCompleted.checked = true;
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true);
  });
});