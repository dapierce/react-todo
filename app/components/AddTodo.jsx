var React = require('react');

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" onChange={this.handleChange} placeholder="What needs to be done?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

module.exports = AddTodo;