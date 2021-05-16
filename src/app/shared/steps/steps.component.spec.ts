import {
  RouterTestingModule
} from '@angular/router/testing';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {
  StepsComponent
} from './steps.component';

import {
  StepsService
} from './steps.service';

import
  stepsTestJSON
from '../../test/content/steps-content.json';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;
  let mockStepsService: StepsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsComponent ],
      imports: [RouterTestingModule],
      providers: [StepsService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockStepsService = TestBed.inject(StepsService);
    mockStepsService.getContent = jasmine.createSpy().and.returnValue(stepsTestJSON["les-martis"]);

    fixture = TestBed.createComponent(StepsComponent);
	component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
