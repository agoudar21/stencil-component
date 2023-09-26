// import { Component, h, State } from '@stencil/core';
// @Component({
//   tag: 'personal-details',
//   styleUrl: 'personal-details.css',
//   shadow: true,
// })
// export class PersonalDetails {
//   @State() selectedLanguage: string = ''; // Store the selected language
//   private cardnumber: number;
//   private nameoncard: string;
//   private month: string|number ;
//   private formErrors: { name?: string; email?: string; phone?: string; option?: string|number } = {};
//   private formSubmitted: boolean = false;

//   languageOptions = ['English', 'Spanish', 'French', 'German'];

//   handleInputChange = (event: CustomEvent<{ name: string; value: any ; isValid: boolean }>) => {
//     const { name, value } = event.detail;
//     this[name] = value;
//     // Handle validation status as needed
//   };

//   // Handle the language selection change
//    handleLanguageChange(event: CustomEvent<string>) {
//     this.selectedLanguage = event.detail;
//   }

//   handlemonthChange = (event: CustomEvent<string|number>) => {
//     this.month = event.detail;
//   };

//   handleSubmit = (event: Event) => {
//     event.preventDefault();

//     this.formErrors = {};

//     if (!this.cardnumber) {
//       this.formErrors.name = 'Name is required';
//     }
//     if (!this.month) {
//       this.formErrors.option = 'month is required';
//     }
//     if (!this.nameoncard) {
//       this.formErrors.option = 'nameoncard is required';
//     }

//     if (Object.keys(this.formErrors).length === 0) {
//       // Perform form submission logic here
//       console.log('Form submitted:', {
//         cardnumber: this.cardnumber,
//         nameoncard:this.nameoncard,
//         month: this.month,
//       });
//       this.formSubmitted = true;
//     } else {
//       console.log('Form validation failed.');
//     }
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div class="form-input">
//             <form-input label="Your 16-digit mastercard number" name="cardnumber" type="number" required={true} pattern="^[0-9]{16}$" value={this.cardnumber} onInputChange={this.handleInputChange} />
//             <div class="error-message">{this.formErrors.name}</div>
//           </div>
//           <div class="form-input">
//             <form-input label="Name On Card" name="nameoncard" type="text" required={true} pattern="^[A-Za-z]{3,16}$" value={this.nameoncard} onInputChange={this.handleInputChange} />
//             <div class="error-message">{this.formErrors.name}</div>
//           </div>
//           <div class="form-input">
//             <form-select
//               label="Month"
//               options={[1,2,3,4,5]}
//               required={true}
//               value={this.month}
//               onFormSelectChange={this.handlemonthChange}
//             ></form-select>
//             <form-checkbox label="I agree to the terms and conditions" checked={false}></form-checkbox>
//           </div>
//             <button class="btn" type="submit">Verify</button>
//         </form>
//         {this.formSubmitted && <div class="success-message">Form submitted successfully!</div>}
//       </div>
//     );
//   }
// }




// import { Component, h, State } from '@stencil/core';

// @Component({
//   tag: 'personal-details',
//   styleUrl: 'personal-details.css',
//   shadow: true,
// })
// export class PersonalDetails {
//   @State() selectedLanguage: string = '';
//   @State() cardnumber: number;
//   @State() nameoncard: string;
//   @State() month: string | number = '';
//   @State() formErrors: { cardnumber?: string; nameoncard?: string; month?: string; checkbox?: string } = {};
//   @State() formSubmitted: boolean = false;


//   handleInputChange = (event: CustomEvent<{ name: string; value: any; isValid: boolean }>) => {
//     const { name, value, isValid } = event.detail;
//     this[name] = value;

//     // Handle validation status as needed
//     if (!isValid) {
//       this.formErrors[name] = `${name} is required`;
//     } else {
//       this.formErrors[name] = undefined;
//     }
//   };

//   handlemonthChange = (event: CustomEvent<string | number>) => {
//     this.month = event.detail;

//     // Handle validation status as needed
//     if (!this.month) {
//       this.formErrors.month = 'Month is required';
//     } else {
//       this.formErrors.month = undefined;
//     }
//   };

//   handleCheckboxChange = (event: CustomEvent<boolean>) => {
//     this.formErrors.checkbox = event.detail ? undefined : 'You must agree to the terms and conditions';
//   };
  

//   handleSubmit = (event: Event) => {
//     event.preventDefault();

//     // Check for validation errors
//     const hasErrors = Object.values(this.formErrors).some((error) => error !== undefined);

//     if (!hasErrors) {
//       // Perform form submission logic here
//       console.log('Form submitted:', {
//         cardnumber: this.cardnumber,
//         nameoncard: this.nameoncard,
//         month: this.month,
//         checkbox: this.formErrors.checkbox, // Handle checkbox validation here
//       });
//       this.formSubmitted = true;
//     } else {
//       console.log('Form validation failed.');
//     }
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           {/* Form inputs */}
//           <div class="form-input">
//             <form-input
//               label="Your 16-digit mastercard number"
//               name="cardnumber"
//               type="number"
//               required={true}
//               pattern="^[0-9]{16}$"
//               value={this.cardnumber}
//               onInputChange={this.handleInputChange}
//             />
//             <div class="error-message">{this.formErrors.cardnumber}</div>
//           </div>
//           <div class="form-input">
//             <form-input
//               label="Name On Card"
//               name="nameoncard"
//               type="text"
//               required={true}
//               pattern="^[A-Za-z]{3,16}$"
//               value={this.nameoncard}
//               onInputChange={this.handleInputChange}
//             />
//             <div class="error-message">{this.formErrors.nameoncard}</div>
//           </div>
//           <div class="form-input">
//             <form-select
//               label="Month"
//               options={[1, 2, 3, 4, 5]}
//               required={true}
//               value={this.month}
//               onFormSelectChange={this.handlemonthChange}
//             ></form-select>
//             <div class="error-message">{this.formErrors.month}</div>
//           </div>
//           <div class="form-input">
//             {/* ... */}
//             <form-checkbox label="I agree to the terms and conditions" checked={false} onCheckboxChange={this.handleCheckboxChange}></form-checkbox>
//             <div class="error-message">{this.formErrors.checkbox}</div>
//           </div>

//           {/* Submit button */}
//           <button class="btn" type="submit">Verify</button>
//         </form>

//         {/* Success message */}
//         {this.formSubmitted && <div class="success-message">Form submitted successfully!</div>}
//       </div>
//     );
//   }
// }

import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'personal-details',
  styleUrl: 'personal-details.css',
  shadow: true,
})
export class PersonalDetails {
  @Prop() selectedLanguage: string = '';
  @State() cardnumber: number;
  @State() nameoncard: string;
  @State() month: string | number = '';
  @State() formErrors: { cardnumber?: string; nameoncard?: string; month?: string; checkbox?: string } = {};
  @State() formSubmitted: boolean = false;

  handleInputChange = (event: CustomEvent<{ name: string; value: any}>) => {
    const { name, value } = event.detail;
    this[name] = value;
  };

  handlemonthChange = (event: CustomEvent<string | number>) => {
    this.month = event.detail;
    // Handle validation status as needed
    if (!this.month) {
      this.formErrors.month = 'Month is required';
    }
  };

  handleCheckboxChange = (event: CustomEvent<boolean>) => {
    this.formErrors.checkbox = event.detail ? "true" : 'You must agree to the terms and conditions';
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();

    // Check for validation errors
    const hasErrors = Object.values(this.formErrors).some((error) => error !== undefined);

    if (!hasErrors) {
      // Perform form submission logic here
      console.log('Form submitted:', {
        cardnumber: this.cardnumber,
        nameoncard: this.nameoncard,
        month: this.month,
      });
      this.formSubmitted = true;
    } else {
      console.log('Form validation failed.');
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Form inputs */}
          <div class="form-input">
            <form-input
              label="Your 16-digit mastercard number"
              name="cardnumber"
              type="number"
              required={true}
              pattern="^[0-9]{16}$"
              value={this.cardnumber}
              onInputChange={this.handleInputChange}
            />
            <div class="error-message">{this.formErrors.cardnumber}</div>
          </div>
          <div class="form-input">
            <form-input
              label="Name On Card"
              name="nameoncard"
              type="text"
              required={true}
              pattern="^[A-Za-z]{3,16}$"
              value={this.nameoncard}
              onInputChange={this.handleInputChange}
            />
            <div class="error-message">{this.formErrors.nameoncard}</div>
          </div>
          <div class="form-input">
            <form-select
              label="Month"
              options={[ 1, 2, 3, 4, 5]}
              required={true}
              value={this.month}
              onFormSelectChange={this.handlemonthChange}
            ></form-select>
            <div class="error-message">{this.formErrors.month}</div>
          </div>
          <div class="form-input">
            <form-checkbox label="I agree to the terms and conditions" checked={false} onCheckboxChange={this.handleCheckboxChange}></form-checkbox>
            <div class="error-message">{this.formErrors.checkbox}</div>
          </div>

          <button class="btn" type="submit">Verify</button>
        </form>
      </div>
    );
  }
}