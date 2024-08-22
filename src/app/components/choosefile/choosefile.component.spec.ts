import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosefileComponent } from './choosefile.component';

describe('ChoosefileComponent', () => {
  let component: ChoosefileComponent;
  let fixture: ComponentFixture<ChoosefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosefileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
