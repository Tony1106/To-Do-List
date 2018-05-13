import React from 'react';

import './App.css';
import Title from './title.js';
import NavBar from './NavBar.js';
import Table from './Table.js';
import Form from './form.js';
import tasks from './Tasks.js';
import {filter, includes, orderBy, remove} from 'lodash'
const uuidv4 = require('uuid/v4');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: '',
      strSort: 'Priority',
      dir: 'asc',
      //truyen thong so edit vs Delete
      index: null,
      isEdit: false,
      isDelete: false,
      isSearch: true


    };
    this.HandleToggleAdd = this.HandleToggleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSort = this.handleSort.bind(this);

  }
componentWillMount() {

  let items = JSON.parse(localStorage.getItem('task'));
    this.setState({
      items: items,
    })

  console.log();
  }
HandleToggleAdd() {
  this.setState({
    isShowForm:  !this.state.isShowForm
  })
}



handleSearch(value) {




  this.setState({
    strSearch: value,

  })

}

handleSort(value, dir){
  this.setState({
    strSort: value,
    dir: dir
  })

}

//DELETE + Edit

handleEdit(editString, editPriority, itemEditIndex, itemEditId) {

let items = this.state.items;


// items[0].name = editString;
// items[0].Priority = +editPriority;
// console.log(items);

items.map((item) => {
  if (item.id === itemEditId) {
    item.name = editString;
    item.Priority = +editPriority
  } else return item;
})
this.setState({
  items: items
})
localStorage.setItem('task', JSON.stringify(items) );
}

handleDelete(index) {

  let items = remove(this.state.items, (item) => {return item.id === index})
  console.log(items);
this.setState({
  items: this.state.items
})

  localStorage.setItem('task', JSON.stringify(this.state.items) );

}

handleSubmit(item){

  let items = this.state.items;
  items.push({
    id: uuidv4(),
    name: item.name,
    Priority: item.Priority //0: low, 1: medium, 2: high
  })

  this.setState({
    items: items,
    isShowForm: false
  })
    localStorage.setItem('task', JSON.stringify(items) );

}


  render() {
    let originalItems = this.state.items;
    var items = this.state.items;


    const strSearch = this.state.strSearch;

    //const index = this.state.index;
    if (strSearch===1) {items = [...originalItems]} else {
      items = filter(originalItems, (item)=> {
      return includes(item.name, strSearch)
  });}
    items = orderBy(items, [this.state.strSort],  [this.state.dir]);











// const originalItems = this.state.items;
// const strSearch = this.state.strSearch;
// console.log(originalItems);
// console.log(strSearch);
// console.log(this.state.strSearch);
// var items = [];
//
// if (strSearch.length > 0) {
//   originalItems.forEach((item) => {
//     if (item.name.toLowerCase().indexOf(strSearch)!== -1) {items.push(item);}
//   }
//   )
// } else items = originalItems;


let isShowForm = this.state.isShowForm;

    return (
      <div>
        <Title/>
        <NavBar onSort = {this.handleSort} onSearchGo = {this.handleSearch} isShowForm={isShowForm} onClickAdd = {this.HandleToggleAdd}/>
        {isShowForm?<Form onSubmit = {this.handleSubmit}/>:""}
        <Table onEdit = {this.handleEdit} onDelete = {this.handleDelete} items = {items} />
      </div>
    )
  }
}




export default App;
