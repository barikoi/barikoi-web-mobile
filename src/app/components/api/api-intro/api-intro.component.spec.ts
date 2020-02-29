import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntroComponent } from './api-intro.component';

describe('ApiIntroComponent', () => {
  let component: ApiIntroComponent;
  let fixture: ComponentFixture<ApiIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
