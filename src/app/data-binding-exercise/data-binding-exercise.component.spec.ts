import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExerciseComponent } from './data-binding-exercise.component';

describe('DataBindingExerciseComponent', () => {
  let component: DataBindingExerciseComponent;
  let fixture: ComponentFixture<DataBindingExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
