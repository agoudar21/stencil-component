import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'new-personal',
  styleUrl: 'new-personal.css',
  shadow: true,
})
export class NewPersonal {
  @State() values = {
    cardName: "",
    cardNumber: "",
    cvv: "",
  };

  @State() formErrors = {};

  handleSubmit(e: Event) {
    e.preventDefault();

    const newFormErrors = {};

    // Define your input fields here
    const inputs = [
      {
        label: "Name on card",
        type: "text",
        required: true,
      },
      {
        label: "Payment card number",
        type: "number",
        required: true,
      },
      {
        label: "CVV",
        type: "number",
        required: true,
      },
    ];

    inputs.forEach((input) => {
      if (input.required && !this.values[input.label]) {
        newFormErrors[input.label] = "This field is required";
      }
    });

    this.formErrors = newFormErrors;

    if (Object.keys(newFormErrors).length === 0) {
      console.log("Form submitted with values:", this.values);

      // Clear the form
      this.values = {
        cardName: "",
        cardNumber: "",
        cvv: "",
      };
    }
  }

  handleInputChange(event: CustomEvent<string>, label: string) {
    this.values[label] = event.detail;
  }

  render() {
    return (
      <div class="app">
        <h1>Create your account Here!!</h1>
        <div class="form-container">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            {Object.keys(this.formErrors).length > 0 && (
              <div class="error-message">
                Please fill in all required fields.
              </div>
            )}

            <form-input
              label="Name on card"
              type="text"
              required={true}
              value={this.values["Name on card"]}
              formErrors={this.formErrors}
              onInputChange={(e) => this.handleInputChange(e, "Name on card")}
            ></form-input>

            <form-input
              label="Payment card number"
              type="number"
              required={true}
              value={this.values["Payment card number"]}
              formErrors={this.formErrors}
              onInputChange={(e) => this.handleInputChange(e, "Payment card number")}
            ></form-input>

            <form-input
              label="CVV"
              type="number"
              required={true}
              value={this.values["CVV"]}
              formErrors={this.formErrors}
              onInputChange={(e) => this.handleInputChange(e, "CVV")}
            ></form-input>

            <button>Validate</button>
          </form>
        </div>
      </div>
    );
  }
}

