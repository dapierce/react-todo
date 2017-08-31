var React = require('react');
var moment = require('moment');

class TodoItem extends React.Component {
  render () {
    var {id, text, createdAt, isComplete, completedAt} = this.props;
    var todoClassName = isComplete ? 'todo todo-completed' : 'todo';
    var formatDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      // switch timestamp to completed date if complete
      if(isComplete) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    
    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={isComplete}/>
        </div>
        <div>
          <p className="todo__text">{text}</p>
          <p className="todo__subtext">{formatDate()}</p>
        </div>
      </div>
    )
  }
}

module.exports = TodoItem;