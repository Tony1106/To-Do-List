import React from 'react';


class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newEditString: null,
      newPriorityEdit: this.props.editPriority

    }
    this.handleEditString = this.handleEditString.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this)
    this.handleCancelEdit = this.handleCancelEdit.bind(this)
  }
  handleEditString(e) {
    this.setState({
        newEditString: e.target.value
    })
  }
  handlePriorityChange(e) {
    this.setState({
      newPriorityEdit: +e.target.value
    })

  }
  handleCancelEdit () {
    this.props.isEdit(false);
  }

  handleSubmitEdit(editString, editPriority, itemEditIndex, itemEditId) {
    if (this.state.newEditString ===null) {
      editString = this.props.itemEditname
    }

    console.log(editString, editPriority);
    this.props.onEdit(editString, editPriority, itemEditIndex, itemEditId)


    this.props.isEdit(false);
  }

  render() {

    return (
      <tr> <th scope="row">{this.props.indexEdit + 1}</th>
        <td> <input onChange = {this.handleEditString} className="form-control" type="text" placeholder={this.props.itemEditname} value={this.state.newEditString===null?this.props.itemEditname:this.state.newEditString} required/> </td>
        <td>
        <div class="form-group">

          <select value ={this.state.newPriorityEdit} onChange={this.handlePriorityChange}  class="form-control" id="exampleFormControlSelect1">
            <option value = {2}>High</option>
            <option value = {1}>Medium</option>
            <option value = {0}>Low</option>
          </select>
        </div>
        </td>
        <td> <button onClick = {() => this.handleSubmitEdit(this.state.newEditString, this.state.newPriorityEdit, this.props.indexEdit, this.props.itemEditId)} type="button" class="btn btn-primary btn-sm">Submit</button> <button onClick = {this.handleCancelEdit} type="button" class="btn btn-secondary btn-sm">Cancel</button> </td>
      </tr>





    );
  }
}




export default Edit;
