import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeButtonsComponent } from './resume-buttons.component';

describe('ZoomButtonsComponent', () => {
  let component: ResumeButtonsComponent;
  let fixture: ComponentFixture<ResumeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
