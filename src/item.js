import React from 'react';


class Item extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit: false,
      isDelete: false

    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

handleEdit (index) {
    this.setState({
      isEdit: false
    })
    this.props.onEdit(index)
  }
handleDelete (index) {
    this.props.onDelete(index)
}
  render() {
    const item = this.props.item;
    const index = this.props.index;
    const id = item.id;

    var color = "btn-danger";
    var priorityTask;
    if (item.Priority ===0) {
      priorityTask = "Low";
      color = 'btn-info';
    } else if (item.Priority ===1) {
      priorityTask = "Medium";
      color = "btn-warning";
    } else if (item.Priority ===2) {
      priorityTask = "High";
      color = "btn-danger";
    }


    return (
        <tr><th scope="row">{index + 1}</th>
          <td>{item.name}</td>
          <td><button type="button" className={'btn btn-sm '+ color}>{priorityTask} </button></td>
          <td><button onClick = {() => this.handleEdit(index)} id = {item.id} type="button" className="btn btn-light btn-sm">Edit</button> <button onClick = {() => this.handleDelete(id)} id = {item.id} type="button" className="btn btn-dark btn-sm">Delete</button></td>
        </tr>
    );
  }
}




export default Item;
