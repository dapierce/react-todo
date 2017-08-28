var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 22,
        text: 'testing api',
        isComplete: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var todos = {what: 'bad data'};
      TodoAPI.setTodos(todos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array if no localStorage data exists', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return todos if localStorage has valid todos', () => {
      it('should set valid todos array', () => {
        var todos = [{
          id: 22,
          text: 'testing api',
          isComplete: false
        }];
        localStorage.setItem('todos', JSON.stringify(todos));
        var actualTodos = TodoAPI.getTodos();
  
        expect(actualTodos).toEqual(todos);
      });
    });
  });
});