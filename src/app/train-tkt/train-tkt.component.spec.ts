import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTktComponent } from './train-tkt.component';

describe('TrainTktComponent', () => {
  let component: TrainTktComponent;
  let fixture: ComponentFixture<TrainTktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainTktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainTktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
