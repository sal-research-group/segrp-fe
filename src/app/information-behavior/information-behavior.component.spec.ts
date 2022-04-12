import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBehaviorComponent } from './information-behavior.component';

describe('InformationBehaviorComponent', () => {
  let component: InformationBehaviorComponent;
  let fixture: ComponentFixture<InformationBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
