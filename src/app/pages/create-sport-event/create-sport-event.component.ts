import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import flatpickr from "flatpickr";

@Component({
  selector: 'app-create-sport-event',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-sport-event.component.html',
  styleUrl: './create-sport-event.component.css'
})
export class CreateSportEventComponent implements OnInit, AfterViewInit {
  eventForm: FormGroup;
  sportModalities: string[] = [];
  provinces: string[] = [];
  @ViewChild('startDateInput') startDateInput!: ElementRef;
  @ViewChild('endDateInput') endDateInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.eventForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      eventUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      location: ['', Validators.required],
      province: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      sportModality: ['', Validators.required],
      coverImage: [null],
      logoImage: [null]
    });
  }

  ngAfterViewInit(): void {
    flatpickr(this.startDateInput.nativeElement, {
      enableTime: false,
      dateFormat: 'Y-m-d',
      onChange: (selectedDates) => {
        this.eventForm.patchValue({startDate: selectedDates[0]});
      }
    });

    flatpickr(this.endDateInput.nativeElement, {
      enableTime: false,
      dateFormat: 'Y-m-d',
      onChange: (selectedDates) => {
        this.eventForm.patchValue({endDate: selectedDates[0]});
      }
    });
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.eventForm.patchValue({
        [field]: file
      });
    }
  }

  ngOnInit(): void {
    // Initialize sport modalities
    this.sportModalities = [
      'Running',
      'Cycling',
      'Swimming',
      'Triathlon',
      'Trail Running',
      'Mountain Biking',
      'Road Cycling',
      'Marathon',
      'Ultra Marathon',
      'Duathlon'
    ];

    // Initialize provinces/states
    this.provinces = [
      'Madrid',
      'Barcelona',
      'Valencia',
      'Sevilla',
      'Málaga',
      'Bilbao',
      'Zaragoza',
      'Murcia',
      'Palma',
      'Las Palmas'
    ];
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log('Form submitted:', this.eventForm.value);
      // Here you would typically send the data to your backend
      // After successful creation, navigate to the events list
      this.router.navigate(['/']);
    } else {
      this.markFormGroupTouched(this.eventForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.eventForm.get(controlName);
    if (!control?.errors || !control.touched) return '';

    const errors = control.errors;
    if (errors['required']) return 'This field is required';
    if (errors['minlength']) return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    if (errors['pattern']) return 'Please enter a valid URL starting with http:// or https://';

    return 'Invalid input';
  }
}
