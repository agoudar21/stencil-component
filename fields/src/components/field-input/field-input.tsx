import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'field-input',
  styleUrl: 'field-input.css',
  shadow: true,
})
export class FieldInput {
  @Prop() label: string;
  @Prop() name: string;
  @Prop() type: string;
  @Prop() required: boolean;
  @Prop() value: string;
  @Prop() pattern: string;
  @Event() inputChange: EventEmitter;

  @State() inputValue: string = '';
  @State() isValid: boolean = true;
  @State() isBlurred: boolean = false;
  @State() labelMoved: boolean = false;
  @State() inputFocused: boolean = false;

  handleFocus = () => {
    this.isBlurred = false;
    this.inputFocused = true;
    this.labelMoved = true;
  };

  handleBlur = () => {
    this.isBlurred = true;
    this.inputFocused = false;
    if (!this.inputValue) {
      this.labelMoved = false;
    }
  };

  handleChange = (event: Event) => {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.validateInput(this.inputValue);
    this.inputChange.emit({ name: this.name, value: this.inputValue, isValid: this.isValid });
  };

  validateInput = (inputValue: string) => {
    if (this.required && inputValue.trim() === '') {
      this.isValid = false;
    } else if (this.pattern && !new RegExp(this.pattern).test(inputValue)) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  };

  render() {
    const isPatternInvalid = !this.isValid && this.isBlurred && this.inputValue.trim() !== '' && !new RegExp(this.pattern).test(this.inputValue);
    const isRequiredInvalid = this.required && this.isBlurred && this.inputValue.trim() === '';
  
    return (
      <div class="inputs">
        <div class="label-container">
          <label class={`label ${this.labelMoved ? 'moved' : ''}`}>
            {this.label}
            {this.required && <span>*</span>}
          </label>
          <input
            class={`${isPatternInvalid || isRequiredInvalid ? 'invalid' : ''} ${this.inputFocused ? 'focused' : ''}`}
            type={this.type}
            name={this.name}
            value={this.inputValue}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onInput={this.handleChange}
          />
        </div>
        {isPatternInvalid && <div class="error-message">Invalid input format.</div>}
        {isRequiredInvalid && <div class="error-message">This field is required.</div>}
      </div>
    );
  }
}


