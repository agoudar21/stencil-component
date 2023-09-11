import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'tou-checkbox',
  styleUrl: 'tou-checkbox.css',
  shadow: true,
})
export class TouCheckbox {
  @Prop() isChecked: boolean;
  @Prop() required: boolean;

  @State() hasError: boolean = false;

  handleClick = () => {
    if (this.required && !this.isChecked) {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
  };

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.isChecked} onClick={this.handleClick} />
        <label>I agree to abide by TOU</label>
        {this.required && this.hasError && <div class="error-message">Please agree to TOU</div>}
      </div>
    );
  }
}

