import { RouterTestingModule } from '@angular/router/testing';
import { ImagePageContentService } from './image-page-content.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePageComponent } from './image-page.component';

describe('ImagePageComponent', () => {
  let component: ImagePageComponent;
  let fixture: ComponentFixture<ImagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePageComponent ],
      imports: [RouterTestingModule],
      providers: [ImagePageContentService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
