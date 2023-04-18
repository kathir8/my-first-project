import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEncapsulationComponent } from './child-encapsulation.component';

describe('ChildEncapsulationComponent', () => {
  let component: ChildEncapsulationComponent;
  let fixture: ComponentFixture<ChildEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEncapsulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
