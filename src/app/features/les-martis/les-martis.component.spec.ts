import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {
  LesMartisComponent
} from './les-martis.component';

describe('LesMartisComponent', () => {
  let component: LesMartisComponent;
  let fixture: ComponentFixture<LesMartisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LesMartisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesMartisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
