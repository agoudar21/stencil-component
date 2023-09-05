import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'form-input',
  styleUrl: 'form-input.css',
  shadow: true,
})
export class FormInput {
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

  handleBlur = () => {
    this.isBlurred = true;
    this.validateInput(this.inputValue);
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
    return (
      <div class="inputs">
        <label>
          {this.label}
          {this.required && <span>*</span>}
        </label>
        <input
          class={`${this.isBlurred && !this.isValid ? 'invalid' : ''}`}
          type={this.type}
          name={this.name}
          value={this.inputValue}
          onBlur={this.handleBlur}
          onInput={this.handleChange}
        />
        {!this.isValid && this.isBlurred && this.inputValue.trim() !== '' && <div class="error-message">Invalid input format.</div>}
        {this.required && this.isBlurred && this.inputValue.trim() === '' && <div class="error-message">This field is required.</div>}
      </div>
    );
  }
}
