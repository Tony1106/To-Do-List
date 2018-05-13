import React  from 'react';
import Item from './item'
import Edit from './editItem'


class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      indexEdit: null,
      isEdit:  false,
      newEditString:null
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.isEdit = this.isEdit.bind(this)
  }
  handleEdit (index) {
    this.setState({
      indexEdit: index,
      isEdit: true

    })
    console.log(index);
  }

  isEdit(){
    this.setState({

      isEdit: false

    })
  }



  render() {

    const items = this.props.items;


    console.log( this.props.items);


    const ElementItem = items.map((item, index) => {

        return   (
        <Item onEdit = {this.handleEdit} onDelete = {this.props.onDelete} key={index} item={item} index = {index} />);

      }
      )

      if (this.state.isEdit) {

            var itemIndex = this.state.indexEdit;


            var itemEditname = items[itemIndex].name;

            var itemEditId = items[itemIndex].id;
            var editPriority = items[itemIndex].Priority;
            console.log(editPriority);


            ElementItem[this.state.indexEdit] =   <Edit key = {itemEditId} onEdit= {this.props.onEdit} indexEdit = {this.state.indexEdit} itemEditname = {itemEditname} itemEditId = {itemEditId} editPriority = {editPriority} isEdit = {this.isEdit}/>

      } //END IF statement


    return (



        <div className="addtodolist">
              <table className="table">
              <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">List of Item</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
              </tr>
              </thead>
            <tbody>
              {ElementItem}

            </tbody>
          </table>
        </div>

    );
  }
}




export default Table;
