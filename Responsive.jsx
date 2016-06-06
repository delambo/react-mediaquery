
import className from 'classnames';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Responsive = class Responsive extends Component {

  constructor(props) {
    super(props);
    this.state = { classes: [], allClasses: [] };
    this.addMedia(props);
  }

  addMedia(props) {
    let initial = true;
    const addUniqueItemToArray = (array, item) => [...new Set(array.concat(item))];

    const setClassState = (className) => {
      const state = {
        classes: addUniqueItemToArray(this.state.classes, className),
        allClasses: addUniqueItemToArray(this.state.allClasses, className),
      };
      if (initial) this.state = state;
      else this.setState(state);
    };

    const getQueryHandler = (className) => {
      return (mql) => {
        if (mql.matches) {
          if (typeof className === 'function') {
            var result = className(mql);
            if (typeof result === 'string') {
              setClassState(result);
            }
          } else {
            setClassState(className);
          }

        } else {
          const index = this.state.classes.indexOf(className);
          if (index > -1) {
            const classes = [...this.state.classes];
            classes.splice(index, 1);
            this.setState({ classes });
          }
        }
      };
    };

    for (const query in props.media) {
      const className = props.media[query];
      const mql = window.matchMedia(query);
      const handler = getQueryHandler(className);
      mql.addListener(handler);
      handler(mql);
    }
    initial = false;
  }

  componentDidUpdate() {
    this.updateChildClasses();
  }

  componentDidMount() {
    this.updateChildClasses();
  }

  updateChildClasses() {
    for (const index in this.refs) {
      const el = ReactDOM.findDOMNode(this.refs[index]);
      el.classList.remove.apply(el.classList, this.state.allClasses);
      el.classList.add.apply(el.classList, this.state.classes);
    }
  }

  renderChildren() {
    return React.Children.map(this.props.children, (item, index) => {
      return React.cloneElement(item, { ref: index });
    });
  }

  render() {
    return <span>{this.renderChildren()}</span>;
  }
}

export default Responsive;

