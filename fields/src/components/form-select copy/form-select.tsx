import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'custom-select',
  styleUrl: 'form-select.css',
  shadow: true,
})
export class CustomSelect {
  @Prop() label: string;
  @Prop() options: string[] = [];
  @State() selectedValue: string = '';
  @State() isFocused: boolean = false;
  @State() showError: boolean = false;

  handleOptionClick = (option: string) => {
    this.selectedValue = option;
    this.showError = false;
  };

  @Watch('selectedValue')
  handleValueChange(newValue: string) {
    if (!newValue) {
      this.showError = true;
    } else {
      this.showError = false;
    }
  }

  handleBlur = () => {
    this.isFocused = false;
  };

  handleFocus = () => {
    this.isFocused = true;
  };

  render() {
    return (
      <div class={`custom-select ${this.showError && !this.isFocused ? 'error' : ''}`}>
        <label>
          {this.label}
          <span>*</span>
        </label>
        <div
          class={`selected-option ${this.isFocused ? 'focused' : ''}`}
          onClick={this.handleFocus}
          onBlur={this.handleBlur}
          tabIndex={0}
        >
          {this.selectedValue || 'Select an option'}
          <div class="dropdown-arrow">▼</div>
        </div>
        <div class={`dropdown-options ${this.isFocused ? 'show' : ''}`}>
          {this.options.map((option, index) => (
            <div class="option" onClick={() => this.handleOptionClick(option)} key={index}>
              {option}
            </div>
          ))}
        </div>
        {this.showError && !this.isFocused && <div class="error-message">Please select an option</div>}
      </div>
    );
  }
}
