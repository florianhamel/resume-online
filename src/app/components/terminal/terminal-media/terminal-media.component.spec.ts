import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalMediaComponent } from './terminal-media.component';

describe('TerminalMediaComponent', () => {
  let component: TerminalMediaComponent;
  let fixture: ComponentFixture<TerminalMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
