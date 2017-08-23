var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundation
$(document).foundation();

// load app css
require('applicationStyles');

ReactDOM.render(
  <p>React Boilerplate 3 project</p>,
  document.getElementById('app')
);
