import {Component, Input} from '@angular/core';

interface Option {
  link: string;
  label: string;
}

@Component({
  selector: 'app-terminal-menu',
  templateUrl: './terminal-menu.component.html',
  styleUrls: ['./terminal-menu.component.less']
})
export class TerminalMenuComponent {
  @Input() menu: Option[] = [
    {link: "/resume", label: "Resume"},
    {link: "/about", label: "About"},
    {link: "/work", label: "Work"},
  ];
}
