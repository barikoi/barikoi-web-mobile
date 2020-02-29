import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanEngineIntroComponent } from './urban-engine-intro.component';

describe('UrbanEngineIntroComponent', () => {
  let component: UrbanEngineIntroComponent;
  let fixture: ComponentFixture<UrbanEngineIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanEngineIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanEngineIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
