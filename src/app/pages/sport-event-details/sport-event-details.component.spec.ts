import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEventDetailsComponent } from './sport-event-details.component';

describe('SportEventDetailsComponent', () => {
  let component: SportEventDetailsComponent;
  let fixture: ComponentFixture<SportEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportEventDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
