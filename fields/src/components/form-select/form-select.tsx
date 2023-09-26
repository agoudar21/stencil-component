
// form-select.tsx
import { Component, h, State, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'form-select',
  styleUrl: 'form-select.css',
  shadow: true,
})
export class FormSelect {
  @Prop() label: string;
  @Prop() options: string[] | number[] = [];
  @Prop() required: boolean;
  @Prop() value: string | number;
  @State() selectedValue: string | number;
  @State() isDropdownOpen: boolean = false;
  @State() isBlurred: boolean = false;

  @Event() formSelectChange: EventEmitter<string | number>;

  toggleDropdown = () => {
    if (!this.isBlurred) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  };

  @Listen('document:mousedown', { target: 'window' })
  handleOutsideClick(event: MouseEvent) {
    if (!this.isDropdownOpen) {
      return;
    }

    const dropdown = document.querySelector('.dropdown-options');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.isBlurred = true;
      this.isDropdownOpen = false;
    }
  }

  handleOptionClick = (option: string | number) => {
    this.selectedValue = option;
    this.formSelectChange.emit(this.selectedValue);
    this.isBlurred = false;
    this.isDropdownOpen = false;
  };

  render() {
    const isValid = !this.selectedValue || !this.required || !this.isBlurred;
    const showDropdown = this.isDropdownOpen && isValid;

    return (
      <div class={`custom-dropdown ${!isValid ? 'error' : ''}`}>
        <label class="label">
          {this.label}
          {this.required && <span style={{ color: 'red' }}>*</span>}
        </label>
        <div class="selected-option" onClick={this.toggleDropdown}>
          {this.selectedValue || this.label}
          <div class="dropdown-arrow">▼</div>
        </div>
        <div class={`dropdown-options ${showDropdown ? 'show' : ''}`}>
          {this.options.map((option, index) => (
            <div
              class={`option ${this.selectedValue === option ? 'selected' : ''}`}
              onClick={() => this.handleOptionClick(option)}
              key={index}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    );
  }
}


// import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

// @Component({
//   tag: 'form-select',
//   styleUrl: 'form-select.css',
//   shadow: true,
// })
// export class FormSelect {
//   @Prop() label: string;
//   @Prop() options: string[] | number[] = [];
//   @Prop() required: boolean;
//   @Prop() value: string | number;
//   @State() selectedValue: string | number;
//   @State() isDropdownOpen: boolean = false;
//   @State() isBlurred: boolean = false;

//   @Event() formSelectChange: EventEmitter<string | number>;

//   toggleDropdown = () => {
//     if (!this.isBlurred) {
//       this.isDropdownOpen = !this.isDropdownOpen;
//     }
//   };

//   handleBlur = () => {
//     // if (!this.selectedValue) {
//     //   this.isBlurred = true;
//     //   this.isDropdownOpen = false;
//     // }
//     this.toggleDropdown();
//   };

//   handleOptionClick = (option: string | number) => {
//     this.selectedValue = option;
//     this.formSelectChange.emit(this.selectedValue);
//     this.isBlurred = false;
//     this.isDropdownOpen = false;
//   };

//   render() {
//     const isValid = !this.selectedValue || !this.required || !this.isBlurred;
//     const showDropdown = this.isDropdownOpen && isValid;

//     return (
//       <div class={`custom-dropdown ${!isValid ? 'error' : ''}`} onBlur={() => this.handleBlur()}>
//         <label class="label">
//           {this.label}
//           {this.required && <span style={{ color: 'red' }}>*</span>}
//         </label>
//         <div class="selected-option" onClick={this.toggleDropdown} >
//           {this.selectedValue || this.label}
//           <div class="dropdown-arrow">▼</div>
//         </div>
//         <div class={`dropdown-options ${showDropdown ? 'show' : ''}`}>
//           {this.options.map((option, index) => (
//             <div class={`option ${this.selectedValue === option ? 'selected' : ''}`} onClick={() => this.handleOptionClick(option)} key={index}>
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }



// import { Component, h, State, Prop, Watch, Event, EventEmitter } from '@stencil/core';

// @Component({
//   tag: 'form-select',
//   styleUrl: 'form-select.css',
//   shadow: true,
// })
// export class FormSelect {
//   @Prop() label: string;
//   @Prop() options: string[] = [];
//   @Prop() required: boolean;
//   @Prop() value: string;
//   @State() selectedValue: string = '';
//   @State() isBlurred: boolean = false;
//   @State() isDropdownOpen: boolean = false;

//   @Event() formSelectChange: EventEmitter<string>; // Custom event for value change

//   @Watch('value')
//   valueChanged(newValue: string) {
//     this.selectedValue = newValue;
//   }

//   toggleDropdown = () => {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   };

//   handleBlur = () => {
//     this.isBlurred = true;
//   };

//   handleOptionClick = (option: string) => {
//     this.selectedValue = option;
//     this.formSelectChange.emit(this.selectedValue); // Emit the custom event on value change
//     this.isDropdownOpen = false;
//   };

//   render() {
//     const isValid = this.selectedValue.trim() !== '' || !this.required || !this.isBlurred;

//     return (
//       <div class={`select-container ${!isValid ? 'error' : ''}`}>
//         <label class="select-label">
//           {this.label}
//           {this.required && <span>*</span>}
//         </label>
//         <div class={`dropdown ${this.isDropdownOpen ? 'show' : ''}`} tabIndex={0} onBlur={this.handleBlur}>
//           <div class="selected-value" onClick={this.toggleDropdown}>
//             {this.selectedValue}
//             <div class="dropdown-arrow">▼</div>
//           </div>
//           <div class={`dropdown-list ${this.isDropdownOpen ? 'show' : ''}`}>
//             {this.options.map((option, index) => (
//               <div class="option" onClick={() => this.handleOptionClick(option)} key={index}>
//                 {option}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

// @Component({
//   tag: 'form-select',
//   styleUrl: 'form-select.css',
//   shadow: true,
// })
// export class FormSelect {
//   @Prop() label: string;
//   @Prop() options: string[] = [];
//   @Prop() required: boolean;
//   @Prop() value: string;
//   @State() selectedValue: string = '';
//   @State() isDropdownOpen: boolean = false;

//   @Event() formSelectChange: EventEmitter<string>;

//   toggleDropdown = () => {
//       this.isDropdownOpen = !this.isDropdownOpen;
//   };

//   handleBlur = () => {
//       this.isDropdownOpen = false;
//   };

//   handleOptionClick = (option: string) => {
//     this.selectedValue = option;
//     this.formSelectChange.emit(this.selectedValue);
//     this.isDropdownOpen = false;
//   };

// render() {
//   const isValid = this.selectedValue.trim() !== '' || !this.required ;
//   const showDropdown = this.isDropdownOpen && isValid;

//   return (
//     <div class={`custom-dropdown ${!isValid ? 'error' : ''}`}>
//       <label>
//         {this.label}
//         {this.required && <span>*</span>}
//       </label>
//       <div class={`selected-option ${!isValid ? 'error' : ''}`} onBlur={this.handleBlur} onClick={this.toggleDropdown}>
//         {this.selectedValue || this.label}
//         <div class="dropdown-arrow">▼</div>
//       </div>
//       <div class={`dropdown-options ${showDropdown ? 'show' : ''}`}>
//         {this.options.map((option, index) => (
//           <div class="option" onClick={() => this.handleOptionClick(option)} key={index}>
//             {option}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// }

// import { Component, h, State, Prop, Event, EventEmitter} from '@stencil/core';

// @Component({
//   tag: 'form-select',
//   styleUrl: 'form-select.css',
//   shadow: true,
// })
// export class FormSelect {
//   @Prop() label: string;
//   @Prop() options: string[] = [];
//   @Prop() required: boolean;
//   @Prop() value: string;
//   @State() selectedValue: string = '';
//   @State() isDropdownOpen: boolean = false;

//   @Event() formSelectChange: EventEmitter<string>;

//   toggleDropdown = () => {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   };

//   handleOptionClick = (option: string) => {
//     this.selectedValue = option;
//     this.formSelectChange.emit(this.selectedValue);
//     this.isDropdownOpen = false;
//   };

//   render() {
//     const isValid = this.selectedValue.trim() !== '' || !this.required;
//     const showDropdown = this.isDropdownOpen && isValid;

//     return (
//       <div class="custom-dropdown">
//         <label>
//           {this.label}
//           {this.required && <span>*</span>}
//         </label>
//         <div
//           class={`selected-option ${!isValid ? 'error' : ''}`}
//           onClick={this.toggleDropdown}
//         >
//           {this.selectedValue || this.label}
//           <div class="dropdown-arrow">▼</div>
//         </div>
//         <div class={`dropdown-options ${showDropdown ? 'show' : ''}`}>
//           {this.options.map((option, index) => (
//             <div class="option" onClick={() => this.handleOptionClick(option)} key={index}>
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

// @Component({
//   tag: 'form-select',
//   styleUrl: 'form-select.css',
//   shadow: true,
// })
// export class FormSelect {
//   @Prop() label: string;
//   @Prop() options: string[]|number[] = [];
//   @Prop() required: boolean;
//   @Prop() value: string|number;
//   @State() selectedValue: string|number;
//   @State() isDropdownOpen: boolean = false;
//   @State() isBlurred: boolean = false;

//   @Event() formSelectChange: EventEmitter<string|number>;

//   toggleDropdown = () => {
//     if (!this.isBlurred) {
//       this.isDropdownOpen = !this.isDropdownOpen;
//     }
//   };

//   handleBlur = () => {
//     if (!this.selectedValue) {
//       this.isBlurred = true;
//       this.isDropdownOpen = false;
//     }
//   };

//   handleOptionClick = (option: string|number) => {
//     this.selectedValue = option;
//     this.formSelectChange.emit(this.selectedValue);
//     this.isBlurred = false;
//     this.isDropdownOpen = false;
//   };

//   render() {
//     const isValid = !this.selectedValue || !this.required || !this.isBlurred;
//     const showDropdown = this.isDropdownOpen && isValid;

//     return (
//       <div class={`custom-dropdown ${!isValid ? 'error' : ''}`}>
//         <label class="label">
//           {this.label}
//           {this.required && <span style={{color:"red"}}>*</span>}
//         </label>
//         <div class="selected-option" onClick={this.toggleDropdown}>
//           {this.selectedValue || this.label}
//           <div class="dropdown-arrow">▼</div>
//         </div>
//         <div class={`dropdown-options ${showDropdown ? 'show' : ''}`}>
//           {this.options.map((option, index) => (
//             <div class="option" onClick={() => this.handleOptionClick(option)} key={index}>
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
