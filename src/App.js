import React, { Component } from 'react';
import Routes from './Routes';
import InputForm from './components/inputForm';
import DisplayList from './components/displaylist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    }
  };

  


  render() {

    const updateTodos = (newTodo, cb) => {
      this.setState({todo: newTodo,},()=>{console.log("updated State in App",this.state.todo )});
      cb();
    }


    return (
      <div className="App">
        <header className="App-header">

          <h1>Todo Application</h1>

        </header>

        <Routes />

        <InputForm todo={this.state.todo} hitIt={updateTodos}/>

        <h4>Total tasks = {this.state.todo.length}</h4>

        <DisplayList todo={this.state.todo} />

      </div>
    );
  }
}

export default App;
