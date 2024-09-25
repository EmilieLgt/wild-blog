import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Article {
  title: string;
  author: string;
  description: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: string;
}

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  article: Article = {
    title: 'Album Review | Sabrina Carpenter',
    author: 'Emilie',
    description: "Short n' Sweet",
    content:
      'Slayin, stunnin, yesssss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.',
    image: 'https://i.scdn.co/image/ab6761610000e5ebe053b8338322b9c8609ee7ae',
    isPublished: true,
    comment: '',
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
