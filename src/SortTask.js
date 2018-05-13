import React from 'react';


class SortTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strSort: "SortBy"
    };
    this.handleSort = this.handleSort.bind(this);

  }
  handleSort(value, dir) {


    this.props.onSort(value, dir) //truyen truc tiep gia tri thong qua props, ko can phai setState
  }


  render() {


    return (
      <div>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.strSort}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a onClick = {()=> this.handleSort('name', 'asc')} role = "button" className="dropdown-item" >Sort by: Name asc</a>
                <a onClick = {()=> this.handleSort('name', 'desc')} role = "button" className="dropdown-item" >Sort by: Name desc</a>
          <a onClick = {()=> this.handleSort('Priority', 'asc')} role = "button" className="dropdown-item" >Sort by: Priority asc</a>
          <a onClick = {()=> this.handleSort('Priority', 'desc')} role = "button" className="dropdown-item" >Sort by: Priority desc</a>

        </div>
      </div>

      </div>

    );
  }
}




export default SortTask;
