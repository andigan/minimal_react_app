// core react
import React, { Component } from 'react';

import { connect } from 'react-redux';

class BoxToChange extends Component {
  render () {

    return (
      <div
        id='box'
        style={{
          backgroundColor: this.props.boxColor,
          height: '50px',
          margin: '0 20px',
          width: '50px',
          textAlign: 'center',
          lineHeight: '50px',
          border: '2px solid #3a3a90',
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    boxColor: state.config.boxColor
  };
}

export default connect (mapStateToProps)(BoxToChange);
