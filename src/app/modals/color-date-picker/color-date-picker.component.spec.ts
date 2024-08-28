import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDatePickerComponent } from './color-date-picker.component';

describe('ColorDatePickerComponent', () => {
  let component: ColorDatePickerComponent;
  let fixture: ComponentFixture<ColorDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
