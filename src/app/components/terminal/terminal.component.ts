import { Component } from '@angular/core';

interface Option {
  link: string;
  label: string;
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.less']
})
export class TerminalComponent {
  menu: Option[] = [
    {link: "/resume", label: "Resume"},
    {link: "/about", label: "About"},
    {link: "/work", label: "Work"},
  ];
  isScriptRun: boolean = false;

  buildMenu(): void {
    this.isScriptRun = true;
  }

}
