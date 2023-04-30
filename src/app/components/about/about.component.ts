import {Component} from '@angular/core';

export interface ITopic {
  title: string;
  assetUrl: string;
  assetAlt: string;
  text: string;
  startRight: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  topics: ITopic[] = [
    {
      title: 'Who am I?',
      assetUrl: 'assets/images/florian_hamel.jpeg',
      assetAlt: 'Photo of me!',
      text: 'Good question... as I can\'t answer it, I\'ll ' +
        'focus on the educational and professional aspects of my life.\n' +
        'After highschool I studied in a "Classe préparatoire" in order to ' +
        'enter a Business School. And I did! I was admitted to EDHEC Business School in 2017 but unfortunately, ' +
        'I was not happy with what I was learning...\n' +
        'So I decided to switch field of study after one year. I was very interested in programming ' +
        'and wanted a self-directed pedagogy so I tried the one month long 42 competition exam and I passed!',
      startRight: false
    },
    {
      title: 'What did I learn at 42Paris?',
      assetUrl: 'assets/images/42Paris.png',
      assetAlt: 'Logo 42 Paris',
      text: 'A lot of things... and even more about myself ' +
        'than about code. It might sound crazy but during my cursus, learning was less ' +
        'about the "what" than it was about the "how" and the "why".\nI was in total autonomy ' +
        'during about half of the cursus meaning one year and a half: no teacher and in the middle ' +
        'of the corona virus crisis. It was tough and very interesting at the same time.\n' +
        'For the other half I worked on several projects with two other students for the rest of the cursus. ' +
        'I discovered the highs and lows of teamworking in programming, and it was for sure the best part ' +
        'of my cursus. It made me able to apply for the job I am doing now!',
      startRight: true
    },
    {
      title: 'What am I doing now?',
      assetUrl: 'assets/images/freelance-idea.jpg',
      assetAlt: 'Image Freelance',
      text: 'I\'m a Fullstack Developer Freelance currently engaged in a long term mission for Chanel since ' +
        'September 2022.\nOn the side I try to improve my technical skills and keep my curiosity open to understanding ' +
        'technologies and many other things. I am always having fun facing new challenges, while trying to appreciate ' +
        'what\'s in front of me.\nDeveloping this small resume online was something really fun to me before everything! ' +
        'Hope you enjoyed the tour, and feel free to contact me on the media shared in the menu! :D',
      startRight: false
    }
  ]
}
