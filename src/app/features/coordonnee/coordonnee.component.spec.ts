import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonneeComponent } from './coordonnee.component';

describe('CoordonneeComponent', () => {
  let component: CoordonneeComponent;
  let fixture: ComponentFixture<CoordonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
