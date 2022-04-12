import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedElementComponent } from './embedded-element.component';

describe('EmbeddedElementComponent', () => {
  let component: EmbeddedElementComponent;
  let fixture: ComponentFixture<EmbeddedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
