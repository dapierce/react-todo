var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    // check localStorage is valid array
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log('Error', e)
    }

    // only return data if an array
    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function (todos, showCompleted, search) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.isComplete || showCompleted;
    });
    // Filter by search
    if(search.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }

    // Sort todos with non-completed at top
    filteredTodos.sort((a, b) => {
      if(!a.isComplete && b.isComplete) {
        return -1;
      } else if(a.isComplete && !b.isComplete) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  },

  getShowCompleted: function () {
    var stringShowCompleted = localStorage.getItem('showCompleted');
    if(stringShowCompleted === 'true') {
      return true;
    } else {
      return false;
    }
  },

  setShowCompleted: function (showCompleted) {
    if(showCompleted === true || showCompleted === false) {
      localStorage.setItem('showCompleted', showCompleted);
    }
  }
};