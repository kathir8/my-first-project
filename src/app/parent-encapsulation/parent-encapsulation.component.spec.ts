import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEncapsulationComponent } from './parent-encapsulation.component';

describe('ParentEncapsulationComponent', () => {
  let component: ParentEncapsulationComponent;
  let fixture: ComponentFixture<ParentEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentEncapsulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
