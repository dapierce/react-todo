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
    var {checkedShowCompleted} = this.props;
    var renderCheckboxShowCompleted = () => {
      if(checkedShowCompleted) {
        return (
          <input type="checkbox" ref="showCompleted" onChange={this.handleShowCompleted} checked/>
        )} else {
          return (
            <input type="checkbox" ref="showCompleted" onChange={this.handleShowCompleted}/>
          )
      }
    }
    return (
      <div className="menu container__header row">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
          <label>
          {renderCheckboxShowCompleted()}
          Show Completed
          </label>
      </div>
    )
  }
}

module.exports = TodoSearch;