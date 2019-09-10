import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanFelipeComponent } from './san-felipe.component';

describe('SanFelipeComponent', () => {
  let component: SanFelipeComponent;
  let fixture: ComponentFixture<SanFelipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanFelipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanFelipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
