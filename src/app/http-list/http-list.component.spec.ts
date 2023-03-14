import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpListComponent } from './http-list.component';

describe('HttpListComponent', () => {
  let component: HttpListComponent;
  let fixture: ComponentFixture<HttpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
