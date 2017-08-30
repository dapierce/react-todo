var React = require('react');
var moment = require('moment');

class TodoItem extends React.Component {
  render () {
    var {id, text, createdAt, isComplete, completedAt} = this.props;
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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
          <input type="checkbox" checked={isComplete}/>
          <p>{text}</p>
          <p>{formatDate()}</p>
      </div>
    )
  }
}

module.exports = TodoItem;