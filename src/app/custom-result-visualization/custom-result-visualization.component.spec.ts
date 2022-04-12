import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomResultVisualizationComponent } from './custom-result-visualization.component';

describe('CustomResultVisualizationComponent', () => {
  let component: CustomResultVisualizationComponent;
  let fixture: ComponentFixture<CustomResultVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomResultVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomResultVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
