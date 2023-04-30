import {Component, Input} from '@angular/core';
import {ITopic} from "../about.component";

@Component({
  selector: 'app-about-topic',
  templateUrl: './about-topic.component.html',
  styleUrls: ['./about-topic.component.less']
})
export class AboutTopicComponent {
  @Input() topic!: ITopic;
}
