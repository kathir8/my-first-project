import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildTaskComponent } from './view-child-task.component';

describe('ViewChildTaskComponent', () => {
  let component: ViewChildTaskComponent;
  let fixture: ComponentFixture<ViewChildTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
