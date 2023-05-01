import {Component} from '@angular/core';

interface IMedium {
  src: string;
  alt: string;
  mediumLink: string;
}

@Component({
  selector: 'app-terminal-media',
  templateUrl: './terminal-media.component.html',
  styleUrls: ['./terminal-media.component.less']
})
export class TerminalMediaComponent {
  media: IMedium[] = [
    {src: 'assets/images/malt.svg', alt: 'malt-logo', mediumLink: 'https://www.malt.fr/profile/florianhamel'},
    {src: 'assets/images/linkedin.svg', alt: 'linkedin-logo', mediumLink: 'https://www.linkedin.com/in/florian-hamel42'},
    {src: 'assets/images/github.svg', alt: 'github-logo', mediumLink: 'https://github.com/florianhamel'},
  ];
}
