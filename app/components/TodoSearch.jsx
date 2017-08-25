var React = require('react');

class TodoSearch extends React.Component {
  constructor (props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowCompleted = this.handleShowCompleted.bind(this);
  }
  handleSearch (event) {
    var search = event.target.value;
    this.props.onSearch(search);
  }
  handleShowCompleted (event) {
    var showCompleted = event.target.checked;    
    this.props.onShowComplete(showCompleted);    
  }
  render() {
    return (
      <div>
        <div>
          <input type="search" id="" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" id="show-completed" ref="showCompleted" onChange={this.handleShowCompleted}/>
            Show Completed
          </label>
        </div>
      </div>
    )
  }
}

module.exports = TodoSearch;