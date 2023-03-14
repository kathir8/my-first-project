import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisibleTaskComponent } from './divisible-task.component';

describe('DivisibleTaskComponent', () => {
  let component: DivisibleTaskComponent;
  let fixture: ComponentFixture<DivisibleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisibleTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisibleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
