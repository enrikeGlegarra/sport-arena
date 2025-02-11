import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportEventComponent } from './create-sport-event.component';

describe('CreateSportEventComponent', () => {
  let component: CreateSportEventComponent;
  let fixture: ComponentFixture<CreateSportEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSportEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSportEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
