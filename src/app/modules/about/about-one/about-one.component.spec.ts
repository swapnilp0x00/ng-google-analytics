import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOneComponent } from './about-one.component';

describe('AboutOneComponent', () => {
  let component: AboutOneComponent;
  let fixture: ComponentFixture<AboutOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
