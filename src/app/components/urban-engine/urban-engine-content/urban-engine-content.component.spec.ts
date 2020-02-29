import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanEngineContentComponent } from './urban-engine-content.component';

describe('UrbanEngineContentComponent', () => {
  let component: UrbanEngineContentComponent;
  let fixture: ComponentFixture<UrbanEngineContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanEngineContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanEngineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
