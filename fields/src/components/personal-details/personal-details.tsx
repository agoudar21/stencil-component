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
  private cardnumber: number;
  private nameoncard: string;
  private month: string|number ;
  private formErrors: { name?: string; email?: string; phone?: string; option?: string|number } = {};
  private formSubmitted: boolean = false;

  handleInputChange = (event: CustomEvent<{ name: string; value: any ; isValid: boolean }>) => {
    const { name, value } = event.detail;
    this[name] = value;
    // Handle validation status as needed
  };

  handlemonthChange = (event: CustomEvent<string|number>) => {
    this.month = event.detail;
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();

    this.formErrors = {};

    if (!this.cardnumber) {
      this.formErrors.name = 'Name is required';
    }
    if (!this.month) {
      this.formErrors.option = 'month is required';
    }
    if (!this.nameoncard) {
      this.formErrors.option = 'nameoncard is required';
    }

    if (Object.keys(this.formErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', {
        cardnumber: this.cardnumber,
        nameoncard:this.nameoncard,
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
          <div class="form-input">
            <form-input label="Your 16-digit mastercard number" name="cardnumber" type="number" required={true} pattern="^[0-9]{16}$" value={this.cardnumber} onInputChange={this.handleInputChange} />
            <div class="error-message">{this.formErrors.name}</div>
          </div>
          <div class="form-input">
            <form-input label="Name On Card" name="nameoncard" type="text" required={true} pattern="^[A-Za-z]{3,16}$" value={this.nameoncard} onInputChange={this.handleInputChange} />
            <div class="error-message">{this.formErrors.name}</div>
          </div>
          <div class="form-input">
            <form-select
              label="Month"
              options={[1,2,3,4,5]}
              required={true}
              value={this.month}
              onFormSelectChange={this.handlemonthChange}
            ></form-select>
          </div>
            <button class="btn" type="submit">Verify</button>
        </form>
        {this.formSubmitted && <div class="success-message">Form submitted successfully!</div>}
      </div>
    );
  }
}
