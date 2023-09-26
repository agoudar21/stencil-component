// import { Component, h, State, Prop, Event, EventEmitter } from "@stencil/core";

// @Component({
//   tag: "input-new",
//   styleUrl: "input-new.css",
//   shadow: true,
// })
// export class InputNew {
//   @Prop() value: string = "";
//   @Prop() width: number = 0;
//   @Prop() placeholder: string = "";
//   @Prop() required: boolean = false;
//   @Prop() message: string = "";
//   @Prop() errMessage: string = "";
//   @Prop() name: string = "";
//   @Prop() pattern: string = "";
//   @Prop() formErrors: { [key: string]: string } = {};

//   @Event() changeInput: EventEmitter<string>;

//   @State() focused = false;
//   @State() isValid = true;

//   handleFocus = () => {
//     this.focused = true;
//   };

//   handleBlur = () => {
//     this.focused = false;

//     if (this.pattern && this.value) {
//       this.isValid = new RegExp(this.pattern).test(this.value);
//     }
//   };

//   handleChange = (event: CustomEvent) => {
//     const newValue = event.detail;
//     this.changeInput.emit(newValue);
//   };
  
//   showError = this.formErrors[this.name] || (this.required && !this.value);

//   render() {
//     return (
//       <div
//         class={`formInput ${this.focused || this.value ? "focused" : ""}`}
//         style={{ width: `${this.width}%` }}
//       >
//         <div
//           class={`input-container ${this.value || this.focused ? "focused" : ""} ${
//             !this.isValid ? "invalid" : ""
//           }`}
//         >
//           <input
//             value={this.value}
//             onChange={this.handleChange}
//             onFocus={this.handleFocus}
//             onBlur={this.handleBlur}
//             name={this.name}
//           />
//           <label class={`placeholder ${this.value || this.focused ? "focused" : ""}`}>
//             {this.required ? (
//               <span>
//                 {this.placeholder}
//                 <span
//                   style={{
//                     color: "#00af41",
//                     fontSize: "1.3rem",
//                     fontWeight: "800",
//                   }}
//                 >
//                   *
//                 </span>
//               </span>
//             ) : (
//               this.placeholder
//             )}
//           </label>
//         </div>
//         {!this.isValid && (
//           <span class="errorMessage" style={{ color: "rgb(231, 77, 88)" }}>
//             {this.errMessage}
//           </span>
//         )}
//         {this.showError && (
//           <span class="errorMessage" style={{ color: "rgb(231, 77, 88)" }}>
//             {this.showError}
//           </span>
//         )}
//         <span class="message-input">{this.message}</span>
//       </div>
//     );
//   }
// }

import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'form-input',
  styleUrl: 'form-input.css',
  shadow: true,
})
export class FormInput {
  @Prop() label: string;
  @Prop() type: string;
  @Prop() required: boolean;
  @Prop() value: string;
  @Prop() pattern: string;
  @Prop() formErrors: { [key: string]: string };

  @Event() inputChange: EventEmitter<CustomEvent<string>>;

  handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    this.inputChange.emit(new CustomEvent('inputChange', { detail: inputValue }));
  }

  render() {
    const showError = this.formErrors[this.label];

    return (
      <div class="formInput">
        <label>
          {this.label}
          {this.required && <span>*</span>}
        </label>
        <div class={`input-container ${this.value ? 'focused' : ''} ${!this.value && showError ? 'invalid' : ''}`}>
          <input
            type={this.type}
            value={this.value}
            onInput={(event) => this.handleChange(event)}
          />
        </div>
        {this.value && this.pattern && !new RegExp(this.pattern).test(this.value) && (
          <span class="errorMessage" style={{ color: 'rgb(231, 77, 88)' }}>
            Invalid input
          </span>
        )}
        {showError && (
          <span class="errorMessage" style={{ color: 'rgb(231, 77, 88)' }}>
            {showError}
          </span>
        )}
      </div>
    );
  }
}


