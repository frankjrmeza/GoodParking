import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuposComponent } from './list-cupos.component';

describe('ListCuposComponent', () => {
  let component: ListCuposComponent;
  let fixture: ComponentFixture<ListCuposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCuposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
