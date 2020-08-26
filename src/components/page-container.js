// core react
import React, { Component } from 'react';

// components
import BoxToChange from './box-to-change';
import Button from './button';
import StarWarsName from './star-wars-name-container';
import DemoBox from './demo-box.js'
import RandomColorBox from './random-color-box';

import styles from '../styles/page.css';

class PageContainer extends Component {
    render () {
      return <div id="page-container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100px'          
          }}
        >
          <Button />
          <BoxToChange />
          <StarWarsName />
        </div>

        <DemoBox />
        <RandomColorBox />
      </div>
    }
}

export default PageContainer;
