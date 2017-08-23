var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// load foundation
$(document).foundation();

// load app css
require('applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
