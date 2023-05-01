import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-terminal-prompt',
  templateUrl: './terminal-prompt.component.html',
  styleUrls: ['./terminal-prompt.component.less']
})
export class TerminalPromptComponent implements OnInit {
  @Input() finalCommandLine!: string;
  @Input() typeSpeed: number = 20;
  @Output() commandRun: EventEmitter<any> = new EventEmitter();
  commandLine: string = '';
  promptInterval: Subscription = new Subscription();

  ngOnInit() {
    this.promptInterval = interval(this.typeSpeed).subscribe(() => {
        this.commandLine += this.finalCommandLine.charAt(this.commandLine.length);
        if (this.commandLine.length === this.finalCommandLine.length) {
          this.commandRun.emit();
          this.promptInterval.unsubscribe();
        }
      }
    )
  }
}
