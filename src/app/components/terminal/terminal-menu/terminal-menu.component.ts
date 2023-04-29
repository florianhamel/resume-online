import {Component, Input} from '@angular/core';

interface Option {
  path: string;
  label: string;
}

@Component({
  selector: 'app-terminal-menu',
  templateUrl: './terminal-menu.component.html',
  styleUrls: ['./terminal-menu.component.less']
})
export class TerminalMenuComponent {
  @Input() menu: Option[] = [
    {path: "/resume", label: "Resume"},
    {path: "/about", label: "About"},
    {path: "/work", label: "Work"},
  ];
}
