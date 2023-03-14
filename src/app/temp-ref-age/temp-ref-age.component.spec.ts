import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRefAgeComponent } from './temp-ref-age.component';

describe('TempRefAgeComponent', () => {
  let component: TempRefAgeComponent;
  let fixture: ComponentFixture<TempRefAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempRefAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempRefAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
