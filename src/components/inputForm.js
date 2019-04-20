import React, { Component } from 'react';

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputTask: "",
      inputDesc: "",
    }
  };


  render() {

    const onChangeHandler = (propName, propValue, ev) => {
      this.setState({ [propName]: propValue, }, () => console.log("Task: " + this.state.inputTask + ", Description: " + this.state.inputDesc))
        ;
    }

    const addTodo = () => {
      this.props.todo.push({
        task: this.state.inputTask,
        desc: this.state.inputDesc
      });
      this.props.hitIt(this.props.todo, ()=>{this.state.inputTask="";this.state.inputDesc="";});
      
      }

    return (
        <div>

          <input type="text" value={this.state.inputTask} onChange={(ev) => { onChangeHandler("inputTask", ev.target.value) }} />

          <br />

          <input type="text" value={this.state.inputDesc} onChange={(ev) => { onChangeHandler("inputDesc", ev.target.value) }} />

          <br />

          <button onClick={() => addTodo()}>Add</button>

        </div>
      );
    }
  }

  export default InputForm;