import React from 'react';
import SearchTask from './Search';
import SortTask from './SortTask'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: ''


    };
    this.HandleToggle = this.HandleToggle.bind(this);

  }

  HandleToggle() {
    this.props.onClickAdd();

  }


  render() {
    let isShowForm = this.props.isShowForm;

    let buttonType = !isShowForm? <button onClick={this.HandleToggle} type="button" className="btn btn-primary">Add Task</button> : <button onClick={this.HandleToggle} type="button" className="btn btn-success">Close Form</button>

    return (

            <nav className="navbar navbar-light bg-light">
                <SearchTask onSearch={this.props.onSearchGo}/>
                <SortTask onSort = {this.props.onSort}/>
                {buttonType}
            </nav>

    );
  }
}




export default NavBar;
