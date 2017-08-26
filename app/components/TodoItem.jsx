var React = require('react');

class TodoItem extends React.Component {
  render () {
    var {id, text, isComplete} = this.props;
    
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
          <input type="checkbox" checked={isComplete}/>
          {text}
      </div>
    )
  }
}

module.exports = TodoItem;