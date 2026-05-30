import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})

// This component provides a registration form for users to create an account.
//  When the form is submitted and valid, it navigates the user to the products page if the country is Canada.
//Use of injection to get instances of FormBuilder and Router.

export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  provinces: string[] = [

    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan'

  ];

  // use FormBuilder to create a reactive form with validation rules for each field
  registerForm= this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[A-Za-z ]+$/)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/)
        ]
      ],
      dob: [
        '',
        Validators.required
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9 ]+$/)
        ]
      ],
      province: [
        '',
        Validators.required
      ],
      country: [
        '',
        Validators.required
      ],
      terms: [
        false,
        Validators.requiredTrue
      ]
    });
  

  onSubmit() {

    if (
      this.registerForm.valid &&
      this.registerForm.value.country === 'Canada'
    ) {

      this.router.navigate(['/products']);

    }

  }

}