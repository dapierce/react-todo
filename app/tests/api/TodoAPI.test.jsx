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

  describe('getShowCompleted', () => {
    it('should return false if show completed value is not valid/does not exist', () => {
      expect(TodoAPI.getShowCompleted()).toEqual(false);
    });
  
    it('should return true if show completed value is true', () => {
      var showCompleted = true;
      localStorage.setItem('showCompleted', showCompleted);
      expect(TodoAPI.getShowCompleted()).toEqual(true);
    });  
  });

  describe('setShowCompleted', () => {
    it('should update show completed user preference', () => {      
      var showCompleted = true;
      localStorage.setItem('showCompleted', showCompleted);
      expect(localStorage.getItem('showCompleted')).toEqual('true');
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

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'first test',
      isComplete: true
    },{
      id: 2,
      text: 'second test',
      isComplete: false
    },{
      id: 3,
      text: 'third test',
      isComplete: true
    }];

    it('should show all todos when Show Completed is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });

    it('should hide completed todos when Show Complete is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by isComplete status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].isComplete).toBe(false);
    });

    it('should return all todos when search input is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });

    it('should only return todos that match search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, todos[2].text);
      expect(filteredTodos[0]).toEqual(todos[2]);
    });
  });
});