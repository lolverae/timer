import React, { useState } from "react";

const QuantityPicker = () => {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  return (
    <form
      className="quantity-picker"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <input
          className="number-input"
          type="number"
          min="0"
          max="100"
          name="text"
          required="false"
          id="seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        :
        <input
          className="number-input"
          type="number"
          name="text"
          required="false"
          id="seconds"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
      </div>
    </form>
  );
};

export default QuantityPicker;

// export default class QuantityPicker extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { value: this.props.min, disableDec: true, disableInc: false };
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   }

//   increment() {
//     const plusState = this.state.value + 1;
//     if (this.state.value < this.props.max) {
//       this.setState({ value: plusState });
//       this.setState({ disable: false });
//     }
//     if (this.state.value === this.props.max - 1) {
//       this.setState({ disableInc: true });
//     }
//     if (this.state.value === this.props.min) {
//       this.setState({ disableDec: false });
//     }
//   }

//   decrement() {
//     const minusState = this.state.value - 1;
//     if (this.state.value > this.props.min) {
//       this.setState({ value: minusState });
//       if (this.state.value === this.props.min + 1) {
//         this.setState({ disableDec: true });
//       }
//     } else {
//       this.setState({ value: this.props.min });
//     }
//     if (this.state.value === this.props.max) {
//       this.setState({ disableInc: false });
//     }
//   }

//   render() {
//     const { disableDec, disableInc } = this.state;

//     return (
//       <span className="quantity-picker">
//         <button
//           className={`${
//             disableDec ? "mod-disable " : ""
//           }quantity-modifier modifier-left`}
//           onClick={this.decrement}
//         >
//           &ndash;
//         </button>
//         <input
//           className="quantity-display"
//           type="text"
//           value={this.state.value}
//         />
//         <button
//           className={`${
//             disableInc ? "mod-disable " : ""
//           }quantity-modifier modifier-right`}
//           onClick={this.increment}
//         >
//           &#xff0b;
//         </button>
//       </span>
//     );
//   }
// }
