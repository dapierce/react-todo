var React = require('react');

class AddTodo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {todo: ''};

    this.handleTodo = this.handleTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTodo (event) {
    this.setState({todo: event.target.value});
  }
  handleSubmit (event) {
    event.preventDefault();
    var addTodo = this.state.todo;
    
    if(addTodo.length > 0) {
      this.props.onAddTodo(addTodo);
      this.setState({todo: ''});  
      this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  }
  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" onChange={this.handleTodo} placeholder="What needs to be done?"/>
          <button className="button expanded add-button">Add Todo</button>
        </form>
      </div>
    )
  }
}

module.exports = AddTodo;