import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalMenuComponent } from './terminal-menu.component';

describe('TerminalMenuComponent', () => {
  let component: TerminalMenuComponent;
  let fixture: ComponentFixture<TerminalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
