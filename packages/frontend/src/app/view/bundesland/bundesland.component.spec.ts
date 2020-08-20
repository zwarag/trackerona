import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundeslandComponent } from './bundesland.component';

describe('BundeslandComponent', () => {
  let component: BundeslandComponent;
  let fixture: ComponentFixture<BundeslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundeslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundeslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
