import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupantorContentComponent } from './rupantor-content.component';

describe('RupantorContentComponent', () => {
  let component: RupantorContentComponent;
  let fixture: ComponentFixture<RupantorContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupantorContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupantorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
