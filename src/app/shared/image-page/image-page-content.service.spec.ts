import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { ImagePageContentService } from './image-page-content.service';

describe('ImagePageContentService', () => {
  let service: ImagePageContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(ImagePageContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
