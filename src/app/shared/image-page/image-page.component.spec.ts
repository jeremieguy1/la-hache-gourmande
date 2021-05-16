import {
  RouterTestingModule,
} from '@angular/router/testing';

import {
  ActivatedRoute, convertToParamMap
} from '@angular/router';

import {
  ImagePageContentService
} from './image-page-content.service';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {
  ImagePageComponent
} from './image-page.component';

import 
  imagePageTestJSON
from '../../test/content/page-header.json';
import { Observable, of } from 'rxjs';

describe('ImagePageComponent', () => {
  let component: ImagePageComponent;
  let fixture: ComponentFixture<ImagePageComponent>;
  let mockImagePageContentService: ImagePageContentService;

  let mockRouterTestingModule: RouterTestingModule;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePageComponent ],
      imports: [RouterTestingModule],
      providers: [
        ImagePageContentService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ 
              id: 'id-page',
            }))
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockImagePageContentService = TestBed.inject(ImagePageContentService);
    mockImagePageContentService.getContent = jasmine.createSpy().and.returnValue(imagePageTestJSON);

    mockRouterTestingModule = TestBed.inject(RouterTestingModule);
    mockRouterTestingModule

    fixture = TestBed.createComponent(ImagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
