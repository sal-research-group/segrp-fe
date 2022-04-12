import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DandelionApiComponent } from './dandelion-api.component';

describe('DandelionApiComponent', () => {
  let component: DandelionApiComponent;
  let fixture: ComponentFixture<DandelionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DandelionApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DandelionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
