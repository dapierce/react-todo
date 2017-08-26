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
  }
};