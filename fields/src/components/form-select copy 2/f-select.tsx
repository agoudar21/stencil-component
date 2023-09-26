import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'f-select',
  styleUrl: 'f-select.css',
  shadow: true,
})
export class FSelect {
  @Prop() label: string;
  @Prop() options: string[] = [];
  @Prop() selectedOption: string = '';
  @Event() selectChange: EventEmitter;

  @State() isOpen: boolean = false; // Track whether the dropdown is open or closed
  @State() currentOption: string = this.selectedOption; // Initialize the currentOption with the selected option

  handleChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectChange.emit(selectedValue);
    this.currentOption = selectedValue; // Update the current selected option
    this.isOpen = false; // Close the dropdown
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class="short-field interacted">
        <div
          class={`stylish-select ${this.isOpen ? 'active' : ''}`}
          data-type="select-one"
          tabindex="-1"
          onClick={() => this.toggleDropdown()}
        >
          <select class="date-month" aria-labelledby="CardExpiry" onInput={this.handleChange.bind(this)}>
            <option value="" disabled>
              {this.label}
            </option>
            {this.options.map((option) => (
              <option selected={this.currentOption === option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* <span class="selected">
            <span class="text">{this.currentOption}</span>
            <span class="ico"></span>
          </span> */}
          <div class={`dropdown-list ${this.isOpen ? 'open' : ''}`} role="listbox">
            {/* <div>
              {this.options.map((option, index) => (
                <div
                  class={`dropdown-option ${this.currentOption === option ? 'option-selected' : ''}`}
                  role="option"
                  data-index={index}
                  tabindex="0"
                  onClick={() => this.toggleDropdown()}
                >
                  {option}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
