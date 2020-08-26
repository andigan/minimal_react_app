// core react
import React, { Component } from 'react';

// core redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { setBoxColor, getLuke } from '../actions'


class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setBoxColor('blue');
    this.props.getLuke();
  }

  render () {

    return (
      <div
        id='button'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px',
          width: '50px',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          border: '2px solid purple',
        }}
        onClick={this.handleClick}
      >
        click me
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { setBoxColor, getLuke }, dispatch)
}

export default connect (null, mapDispatchToProps)(Button);
