// core react
import React, { Component } from 'react';

// components
import TextFormField from './inputs/text-form-field';

class DemoBox extends Component {
  constructor() {
    super();
    this.handleTextFormFieldChange = this.handleTextFormFieldChange.bind(this);
    this.handleTextFormFieldSubmit = this.handleTextFormFieldSubmit.bind(this);

    this.state = {
      textFormValue: "",
      textFormInfoColor: "grey"
   };

  }

  handleTextFormFieldSubmit(value) {
    this.setState({ textFormValue: value });
    this.setState({ textFormInfoColor: '#26ff26' });
  }

  handleTextFormFieldChange(value) {
    this.setState({ textFormValue: value });
    this.setState({ textFormInfoColor: "grey" });
  }

  render () {

    return (
      <div
        style={{
          backgroundColor: 'gray',
          border: '1px solid black',
          width: '100%',
          padding: '20px'
        }}
      >
        <div id="demo-box-info"
          style={{
            height: '40px',
            padding: '20px'
          }}
        >
          <div id="text-form-field-info"
            style={{
              width: '80%',
              backgroundColor: this.state.textFormInfoColor
            }}
          >
            {this.state.textFormValue}
          </div>
        </div>

        <TextFormField processChange={this.handleTextFormFieldChange} processSubmit={this.handleTextFormFieldSubmit}/>

      </div>
    );
  }
}

export default DemoBox;
