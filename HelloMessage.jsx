import React, {Component} from 'react';

export default class HelloMessage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
}
