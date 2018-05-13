import React from 'react';


class Form extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isClick: false,
        name: null,
        Priority: "Choose your priority"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

    handleChange (e) {
      const target = e.target;
      const value = target.type === "choice"? target.innerText: target.value;
      const name = target.name;

      this.setState ({

          [name]: value

      })
    }

    handleSubmit(e) {
      let priorityNumber = 0;
      if (this.state.Priority==="Low") {
        priorityNumber=  0;
      } else if (this.state.Priority==="Medium"){
        priorityNumber=  1;
      } else if (this.state.Priority==="High") {
        priorityNumber=  2;
      }

      let item = {
        name: this.state.name,
        Priority: priorityNumber
      }
      this.props.onSubmit(item);
      e.preventDefault();
    }


  render() {

    return (

<div className="addlist">
  <form>
    <div className="row justify-content-end">
      <div className="col-md-auto">
        <button onClick={this.handleSubmit}type="button" className="btn btn-primary">Submit</button>
      </div>
      <div className="col-2">
        <input type="text" name="name" onChange = {this.handleChange} className="form-control-sm" placeholder="Task Name" />
      </div>
      <div className="col-2">
        <div className="dropdown">
          <button name = "priorityName" className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.Priority}
          </button>
          <div value={this.state.value} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a value = {2} checked="true"type="choice" name ="Priority" onClick = {this.handleChange} className="dropdown-item">High</a>
            <a value = {1} type="choice" name ="Priority" onClick = {this.handleChange}className="dropdown-item">Medium</a>
            <a value = {0} type="choice" name ="Priority" onClick = {this.handleChange}className="dropdown-item">Low</a>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

)
}
}
export default Form;
