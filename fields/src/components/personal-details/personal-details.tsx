// import { Component, h } from '@stencil/core';

// @Component({
//   tag: 'personal-details',
//   styleUrl: 'personal-details.css',
//   shadow: true,
// })
// export class PersonalDetails {
//   private name: string = '';
//   private email: string = '';
//   private phone: string = '';
//   private selectedOption: string = '';
//   private formErrors: { name?: string; email?: string; phone?: string; option?: string } = {};
//   private formSubmitted: boolean = false;

//   handleInputChange = (event: CustomEvent<{ name: string; value: string }>) => {
//     const { name, value } = event.detail;
//     this[name] = value;
//   };

//   handleOptionChange = (event: CustomEvent<{ name: string; value: string }>) => {
//     const { name, value } = event.detail;
//     this.selectedOption = value;
//   };

//   handleSubmit = (event: Event) => {
//     event.preventDefault();

//     this.formErrors = {};

//     if (!this.name) {
//       this.formErrors.name = 'Name is required';
//     }
//     if (!this.email) {
//       this.formErrors.email = 'Email is required';
//     }
//     if (!this.phone) {
//       this.formErrors.phone = 'Phone is required';
//     }
//     if (!this.selectedOption) {
//       this.formErrors.option = 'Option is required';
//     }

//     if (Object.keys(this.formErrors).length === 0) {
//       // Perform form submission logic here
//       console.log('Form submitted:', {
//         name: this.name,
//         email: this.email,
//         phone: this.phone,
//         selectedOption: this.selectedOption,
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
//             <form-input
//               label="Name"
//               name="name"
//               type="text"
//               required={true}
//               pattern="^[A-Za-z]{4,16}$"
//               value={this.name}
//               onInputChange={this.handleInputChange} />
//             <div class="error-message">{this.formErrors.name}</div>
//           </div>
//           <div class="form-input">
//             <form-input
//               label="Email"
//               name="email"
//               type="email"
//               required={true}
//               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//               value={this.email}
//               onInputChange={this.handleInputChange}
//             />
//             <div class="error-message">{this.formErrors.email}</div>
//           </div>
//           <div class="form-input">
//             <form-input
//               label="Phone"
//               name="phone"
//               type="number"
//               required={true}
//               value={this.phone}
//               pattern= "^[0-9]{10}$"
//               onInputChange={this.handleInputChange} />
//             <div class="error-message">{this.formErrors.phone}</div>
//           </div>
//           <div class="form-select">
//             <form-select
//               label="Select Option"
//               name="option"
//               required={true}
//               selectedValue={this.selectedOption}
//               options={[
//                 { label: 'Option 1', value: 'option1' },
//                 { label: 'Option 2', value: 'option2' },
//                 { label: 'Option 3', value: 'option3' },
//               ]}
//               onSelectChange={this.handleOptionChange}
//             />
//             <div class="error-message">{this.formErrors.option}</div>
//           </div>
//           <div class="btn">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//         {this.formSubmitted && <div class="success-message">Form submitted successfully!</div>}
//       </div>
//     );
//   }
// }

import { Component, h } from '@stencil/core';

@Component({
  tag: 'personal-details',
  styleUrl: 'personal-details.css',
  shadow: true,
})
export class PersonalDetails {
  private name: string = '';
  private email: string = '';
  private phone: string = '';
  private selectedCountry: string = '';
  private formErrors: { name?: string; email?: string; phone?: string; option?: string } = {};
  private formSubmitted: boolean = false;

  handleInputChange = (event: CustomEvent<{ name: string; value: string; isValid: boolean }>) => {
    const { name, value } = event.detail;
    this[name] = value;
    // Handle validation status as needed
  };

  handleCountryChange = (event: CustomEvent<string>) => {
    this.selectedCountry = event.detail;
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();

    this.formErrors = {};

    if (!this.name) {
      this.formErrors.name = 'Name is required';
    }
    if (!this.email) {
      this.formErrors.email = 'Email is required';
    }
    if (!this.phone) {
      this.formErrors.phone = 'Phone is required';
    }
    if (!this.selectedCountry) {
      this.formErrors.option = 'Country is required';
    }

    if (Object.keys(this.formErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        selectedCountry: this.selectedCountry,
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
          <div class="form-input">
            <form-input label="Name" name="name" type="text" required={true} pattern="^[A-Za-z]{4,16}$" value={this.name} onInputChange={this.handleInputChange} />
            <div class="error-message">{this.formErrors.name}</div>
          </div>
          <div class="form-input">
            <field-input
              label="Email"
              name="email"
              type="email"
              required={true}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={this.email}
              onInputChange={this.handleInputChange}
            />
            <div class="error-message">{this.formErrors.email}</div>
          </div>
          <div class="form-input">
            <field-input label="Phone" name="phone" type="number" required={true} value={this.phone} pattern="^[0-9]{10}$" onInputChange={this.handleInputChange} />
            <div class="error-message">{this.formErrors.phone}</div>
          </div>
          <div class="form-input">
            <form-select
              label="Country"
              options={['Residence', 'Kosovo', 'Afghanistan', 'Albania']}
              required={true}
              value={this.selectedCountry}
              onFormSelectChange={this.handleCountryChange}
            ></form-select>
          </div>
          <div class="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
        {this.formSubmitted && <div class="success-message">Form submitted successfully!</div>}
      </div>
    );
  }
}
