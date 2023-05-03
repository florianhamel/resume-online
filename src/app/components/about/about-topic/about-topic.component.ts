import {Component, Input, OnInit} from '@angular/core';
import {ITopic} from "../about.component";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-about-topic',
  templateUrl: './about-topic.component.html',
  styleUrls: ['./about-topic.component.less']
})
export class AboutTopicComponent implements OnInit {
  @Input() topic!: ITopic;
  isCommandRun: boolean = false;
  text: string = '';
  textInterval: Subscription = new Subscription();

  ngOnInit() {
    this.textInterval = interval(0.25).subscribe(() => {
        this.text += this.topic.text.charAt(this.text.length);
      }
    )
  }

  buildContent(): void {
    this.isCommandRun = !this.isCommandRun;
  }
}
