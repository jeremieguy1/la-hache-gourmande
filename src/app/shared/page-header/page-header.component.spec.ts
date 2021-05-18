import {
  PageHeaderService
} from './page-header.service';

import {
  RouterTestingModule
} from '@angular/router/testing';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {
  PageHeaderComponent
} from './page-header.component';

import 
  pageHeaderTestJSON
from '../../test/content/page-header.json';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;
  let mockPageHeaderService: PageHeaderService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderComponent ],
      imports: [RouterTestingModule],
      providers: [PageHeaderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockPageHeaderService = TestBed.inject(PageHeaderService);
    mockPageHeaderService.getContent = jasmine.createSpy().and.returnValue(pageHeaderTestJSON);

    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
