import {Component, Input} from '@angular/core';

interface IOption {
  path: string;
  label: string;
}

@Component({
  selector: 'app-terminal-menu',
  templateUrl: './terminal-menu.component.html',
  styleUrls: ['./terminal-menu.component.less']
})
export class TerminalMenuComponent {
  @Input() menu: IOption[] = [
    {path: "/resume", label: "Resume"},
    {path: "/about", label: "About"}
  ];
}
