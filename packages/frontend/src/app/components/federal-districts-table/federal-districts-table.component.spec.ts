import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalDistrictsTableComponent } from './federal-districts-table.component';

describe('FederalDistrictsTableComponent', () => {
  let component: FederalDistrictsTableComponent;
  let fixture: ComponentFixture<FederalDistrictsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalDistrictsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalDistrictsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
