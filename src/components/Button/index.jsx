import './styles.css';

import { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, onclick, disabled } = this.props;

    return (
      //      <button className="button" onClick={onClick} disabled={disabled}>
      <button className="button" onClick={onclick} disabled={disabled}>
        {text}
      </button>
    );
  }
}
// export const Button = ({ text, onClick, disabled = false }) => (
//   <button className="button" onClick={onClick} disabled={disabled}>
//     {text}
//   </button>
// );
