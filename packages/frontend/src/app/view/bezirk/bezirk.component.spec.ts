import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BezirkComponent } from './bezirk.component';

describe('BezirkComponent', () => {
  let component: BezirkComponent;
  let fixture: ComponentFixture<BezirkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BezirkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BezirkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
