import React from 'react';

export default class Errorz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <strong>Oops!</strong>
        &nbsp;
        <s>{this.props.location.pathname}</s>
      </div>
    );
  }
}
