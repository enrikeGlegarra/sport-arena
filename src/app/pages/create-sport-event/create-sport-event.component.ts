import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import flatpickr from "flatpickr";
import {SportEventService} from "../../shared/services/sport-event.service";
import {CreateSportEventDto} from "../../shared/dtos/SportEvent/CreateSportEvent.dto";

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
  coverImage?: File;
  logoImage?: File;

  @ViewChild('startDateInput') startDateInput!: ElementRef;
  @ViewChild('endDateInput') endDateInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sportEventService: SportEventService
  ) {
    this.eventForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      eventUrl: ['', [Validators.required]],
      location: ['', Validators.required],
      province: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      sportModality: ['', Validators.required]
    });
  }
//      eventUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
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

  onFileChange(event: any, type: 'cover' | 'logo') {
    const file = event.target.files[0];
    if (file) {
      if (type === 'cover') {
        this.coverImage = file;
      } else {
        this.logoImage = file;
      }
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

  async onSubmit() {
    if (this.eventForm.valid) {
      const eventData: CreateSportEventDto = this.eventForm.value;

      this.sportEventService.createSportEvent(eventData, this.coverImage, this.logoImage).subscribe({
        next: (response:any) => {
          console.log('Evento creado con éxito:', response);
        },
        error: (error) => {
          console.error('Error al crear el evento:', error);
        }
      });
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
