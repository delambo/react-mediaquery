
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Responsive from '../Responsive';
import Yo from './Yo';
import style from './styles.css';

class App extends Component {
  render() {
    return (
      <Responsive media={{
        '(min-width: 600px)': style.medium,
        '(min-width: 900px)': style.large,
        '(min-width: 1200px)': style.xlarge,
      }}>
        <Yo />
      </Responsive>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
