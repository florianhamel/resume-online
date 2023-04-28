import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-terminal-prompt',
  templateUrl: './terminal-prompt.component.html',
  styleUrls: ['./terminal-prompt.component.less']
})
export class TerminalPromptComponent implements OnInit {
  commandLine: string = '';
  finalCommandLine: string = './build_menu.sh';
  promptInterval: Subscription = new Subscription();
  @Output() buildMenu: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.promptInterval = interval(20).subscribe(() => {
        this.commandLine += this.finalCommandLine.charAt(this.commandLine.length);
        if (this.commandLine.length === this.finalCommandLine.length) {
          this.buildMenu.emit();
          this.promptInterval.unsubscribe();
        }
      }
    )
  }
}
