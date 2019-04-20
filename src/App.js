import React, { Component } from 'react';
import Routes from './Routes';
import InputForm from './components/inputForm';
import DisplayList from './components/displaylist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputTask: "",
      inputDesc: "",
    }
  };




  render() {

    const updateTodos = (newTodo, cb) => {
      this.setState({ todo: newTodo, }, () => { console.log("updated State in App", this.state.todo) });
      cb();
    }

    const deleteTask = (i) => {
      const deletedList = [...this.state.todo];
      deletedList.splice(i, 1);
      this.setState({ todo: deletedList, }, () => { console.log("deleted State in App", this.state.todo) })
    }

    const editTask = (i) => {
      const editedList = [...this.state.todo];
      const a = editedList[i].task;
      const b = editedList[i].desc;
      editedList.splice(i, 1);
      this.setState({ inputTask: a, inputDesc: b, todo: editedList, }, () => { console.log("edited State in App", this.state.todo) })
    }

    const onChangeHandler = (propName, propValue, ev) => {
      this.setState({ [propName]: propValue, }, () => console.log("Task: " + this.state.inputTask + ", Description: " + this.state.inputDesc))
        ;
    }

    const addTodo = (e) => {
      e.preventDefault();
      const newTodos = [...this.state.todo, {
        task: this.state.inputTask,
        desc: this.state.inputDesc
      }]
      updateTodos(newTodos, () => this.setState({ inputTask: "", inputDesc: "", }));
    }


    return (
      <div className="App">
        <header className="App-header">

          <h1>Todo Application</h1>

        </header>

        <Routes />

        <InputForm todo={this.state.todo} onChangeHandler={onChangeHandler} addTodo={addTodo} inputTask={this.state.inputTask} inputDesc={this.state.inputDesc} />

        <h4>Total tasks = {this.state.todo.length}</h4>

        <DisplayList todo={this.state.todo} deleteTask={deleteTask} editTask={editTask} />

      </div>
    );
  }
}

export default App;
