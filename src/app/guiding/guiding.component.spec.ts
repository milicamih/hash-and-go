import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidingComponent } from './guiding.component';

describe('GuidingComponent', () => {
  let component: GuidingComponent;
  let fixture: ComponentFixture<GuidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
