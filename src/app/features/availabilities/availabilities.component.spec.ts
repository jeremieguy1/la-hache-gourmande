import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {
  AvailabilitiesComponent
} from './availabilities.component';

describe('AvailabilitiesComponent', () => {
  let component: AvailabilitiesComponent;
  let fixture: ComponentFixture<AvailabilitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
