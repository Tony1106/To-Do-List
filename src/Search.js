import React from 'react';


class SearchTask extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        strSearch: ''
      };
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);

    }
    handleSearch(e){
      this.setState({
        strSearch: e.target.value
      })
        this.props.onSearch(e.target.value);
        console.log(e.target.value);
    }
    handleSubmit () {
      this.props.onSearch(this.state.strSearch);
    }
    handleClear () {
      this.setState({
        strSearch: ''
      })
      this.props.onSearch('');
    }

  render() {
    return (
      <div>
            <input value = {this.state.strSearch} onChange = {this.handleSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button  onClick ={this.handleSubmit}className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <button  onClick ={this.handleClear}className="btn btn-outline-danger my-2 my-sm-0" type="submit">Clear</button>
      </div>
    );
  }
}




export default SearchTask;
