import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalerInfoComponent } from './saler-info.component';

describe('SalerInfoComponent', () => {
  let component: SalerInfoComponent;
  let fixture: ComponentFixture<SalerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
