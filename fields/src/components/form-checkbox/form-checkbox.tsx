// form-checkbox.tsx
import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'form-checkbox',
  styleUrl: 'form-checkbox.css',
  shadow: true,
})
export class FormCheckbox {
  @Prop() label: string;
  @Prop() checked: boolean = false;
  @Event() checkboxChange: EventEmitter<boolean>;

  @State() isChecked: boolean;

  componentWillLoad() {
    this.isChecked = this.checked;
  }

  toggleCheckbox = () => {
    this.isChecked = !this.isChecked;
    this.checkboxChange.emit(this.isChecked);
  };

  render() {
    return (
      <div class="stylish-form">
        <div class={`stylish-ds ${this.isChecked ? 'checked' : ''}`} data-type="checkbox" onClick={this.toggleCheckbox}>
          <input type="checkbox" id="CardConsent" name="CardConsent" autocomplete="off" style={{ opacity: "0", position: 'absolute' }} />
          <div class="checkbox">
            {this.isChecked && <span class="checkmark">&#10003;</span>}
          </div>
        </div>
        <label htmlFor="CardConsent">{this.label}</label>
      </div>
    );
  }
}



// // form-checkbox.tsx
// import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

// @Component({
//   tag: 'form-checkbox',
//   styleUrl: 'form-checkbox.css',
//   shadow: true,
// })
// export class FormCheckbox {
//   @Prop() label: string;
//   @Prop() checked: boolean = false;
//   @Event() checkboxChange: EventEmitter<boolean>;

//   @State() isChecked: boolean;

//   componentWillLoad() {
//     this.isChecked = this.checked;
//   }

//   toggleCheckbox = () => {
//     this.isChecked = !this.isChecked;
//     this.checkboxChange.emit(this.isChecked);
//   };

//   render() {
//     return (
//       <div class="stylish-form">
//         <div class={`stylish-ds ${this.isChecked ? 'checked' : ''}`} data-type="checkbox" onClick={this.toggleCheckbox}>
//           <input type="checkbox" id="CardConsent" name="CardConsent" autocomplete="off" style={{ opacity: "0", position: 'absolute' }} />
//           {this.isChecked && <span class="checkbox">&#10003;</span>}
//         </div>
//         <label htmlFor="CardConsent">{this.label}</label>
//       </div>
//     );
//   }
// }









// import { Component, h, Prop, State } from '@stencil/core';

// @Component({
//   tag: 'form-checkbox',
//   styleUrl: 'form-checkbox.css',
//   shadow: true,
// })
// export class FormCheckbox {
//   @Prop() isChecked: boolean;
//   @Prop() required: boolean;

//   @State() hasError: boolean = false;

//   handleClick = () => {
//     if (this.required && !this.isChecked) {
//       this.hasError = true;
//     } else {
//       this.hasError = false;
//     }
//   };

//   render() {
//     return (
//       <div>
//         <input type="checkbox" checked={this.isChecked} onClick={this.handleClick} />
//         <label>I agree to abide by TOU</label>
//         {this.required && this.hasError && <div class="error-message">Please agree to TOU</div>}
//       </div>
//     );
//   }
// }

