import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyshowComponent } from './bookmyshow.component';

describe('BookmyshowComponent', () => {
  let component: BookmyshowComponent;
  let fixture: ComponentFixture<BookmyshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
