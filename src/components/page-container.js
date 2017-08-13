// core react
import React, { Component } from 'react';

// components
import BoxToChange from './box-to-change';
import Button from './button';

import styles from '../styles/page.css';

class PageContainer extends Component {
    render () {
      return <div id="page-container">
        <BoxToChange />
        <Button />
      </div>
    }
}

export default PageContainer;
