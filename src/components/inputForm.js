import React, { Component } from 'react';

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  };


  render() {

    return (
      <div>

        <form onSubmit={(e) => this.props.addTodo(e)}>
          <input type="text" value={this.props.inputTask} onChange={(ev) => { this.props.onChangeHandler("inputTask", ev.target.value) }} />

          <br />

          <input type="text" value={this.props.inputDesc} onChange={(ev) => { this.props.onChangeHandler("inputDesc", ev.target.value) }} />

          <br />

          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default InputForm;