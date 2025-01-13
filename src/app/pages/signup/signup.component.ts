import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css'],
standalone: true,
imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class SignupComponent {}
