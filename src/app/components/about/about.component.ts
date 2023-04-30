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
      assetUrl: 'assets/florian_hamel.jpeg',
      assetAlt: 'Photo of me!',
      text: 'Good question... as I can\'t answer this question, I\'ll ' +
        'focus on the educational and professional aspects of my life. ' +
        'After highschool I entered a "Classe préparatoire" in order to ' +
        'enter a Business School. And I did! I was admitted to EDHEC Business School in 2017 but unfortunately, ' +
        'I was not happy with what I was learning... ' +
        'So I decided to switch field of study after one year. I was very interested in programming ' +
        'and in an self-directed pedagogy so I tried the one month long 42 competition exam and I passed!',
      startRight: false
    },
    {
      title: 'What did I learn @ 42Paris?',
      assetUrl: '/assets/42Paris.png',
      assetAlt: 'Logo 42 Paris',
      text: 'A lot of things... and even more about myself ' +
        'than about code! It might sound crazy but during my cursus, learning was less ' +
        'about the "what" that it was about the "how" and the "why". I was in total autonomy ' +
        'during about half of the cursus: no teacher and in the middle of the corona virus crisis. ' +
        'It was tough and very interesting at the same time. I then worked on several projects with ' +
        'two other students for the rest of the cursus! I discovered the highs and lows of teamworking ' +
        'in programming, and it was the best part of my cursus. It made me able to apply for the job I am doing now!',
      startRight: true
    },
    {
      title: 'What am I doing now?',
      assetUrl: '',
      assetAlt: 'Image Freelance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sodales justo eu gravida. In ipsum erat, cursus non finibus eu, maximus id ex. Proin nec sagittis massa. Nunc non dolor vitae eros aliquet sagittis id venenatis nulla. Fusce mattis ipsum ut ante dapibus, ac placerat diam venenatis. Nunc lacinia mi eget pharetra auctor. Sed non massa id nisl imperdiet egestas. Mauris congue massa posuere tincidunt pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam faucibus venenatis molestie. Pellentesque vulputate in sem vel feugiat.' +
        'Curabitur rutrum id risus eget consectetur. Mauris hendrerit nisl in venenatis efficitur. Aliquam erat volutpat. Nam a justo tellus. Praesent a erat in mauris fermentum euismod sit amet a neque. Suspendisse porttitor tempor diam id finibus. Donec fermentum turpis sed tempus maximus.',
      startRight: false
    }
  ]
}
