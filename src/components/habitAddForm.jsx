import React, { Component } from "react";

export default class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  // Vanilla JS에서 event.target.value 같은 것
  onSubmit = (event) => {
    event.preventDefault();

    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };
  render() {
    return (
      <div>
        <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            className="add-input"
            placeholder="습관을 적어라 마!"
          />
          <button className="add-button">Add</button>
        </form>
      </div>
    );
  }
}
