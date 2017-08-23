var React = require('react');

class TodoItem extends React.Component {
  render () {
    var {id, text} = this.props;
    
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
}

module.exports = TodoItem;