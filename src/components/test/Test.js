import React, {Component} from 'react';

export default class Test extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceoveProps...');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {test: 'something'};
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('componentWillReceiveProps...');
  // }

  render() {
    const {title, body} = this.state;
    return (
      <div>
        {' '}
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
