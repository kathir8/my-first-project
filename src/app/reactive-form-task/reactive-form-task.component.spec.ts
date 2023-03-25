import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormTaskComponent } from './reactive-form-task.component';

describe('ReactiveFormTaskComponent', () => {
  let component: ReactiveFormTaskComponent;
  let fixture: ComponentFixture<ReactiveFormTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
