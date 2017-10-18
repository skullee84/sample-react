import React from 'react';
import toastr from 'libs/toastr';
import { Simple } from 'libs/swal';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToastrEvent = (e) => {
    toastr.info('toastr test');
  }

  handleSwalEvent = (e) => {
    Simple('swal test..');
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleToastrEvent}>
          toastr
        </button>
        <button type="button" onClick={this.handleSwalEvent}>
          swal
        </button>
      </div>
    );
  }
}
