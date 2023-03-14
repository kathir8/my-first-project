import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirComponent } from './custom-dir.component';

describe('CustomDirComponent', () => {
  let component: CustomDirComponent;
  let fixture: ComponentFixture<CustomDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
