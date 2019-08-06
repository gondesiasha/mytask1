import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportdetailsComponent } from './importdetails.component';

describe('ImportdetailsComponent', () => {
  let component: ImportdetailsComponent;
  let fixture: ComponentFixture<ImportdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
