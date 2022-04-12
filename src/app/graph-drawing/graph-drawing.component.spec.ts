import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDrawingComponent } from './graph-drawing.component';

describe('GraphDrawingComponent', () => {
  let component: GraphDrawingComponent;
  let fixture: ComponentFixture<GraphDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDrawingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
