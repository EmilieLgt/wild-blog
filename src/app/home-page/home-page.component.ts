import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/Article';
import { ArticleComponentComponent } from '../article-component/article-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-page-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ArticleComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  articles: Article[] = [
    {
      id: 0,
      title: 'Album Review | Sabrina Carpenter',
      author: 'Emilie',
      description: "Short n' Sweet",
      content:
        'Slayin, stunnin, yesssss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      image: 'https://i.scdn.co/image/ab6761610000e5ebe053b8338322b9c8609ee7ae',
      isPublished: true,
      comment: '',
      likes: 150,
      isLiked: false,
      isCommented: false,
    },
    {
      id: 1,
      title: 'Album Review | Chappell Roan',
      author: 'Emilie',
      description: 'The Rise and Fall of a Midwest Princess',
      content:
        'Slayin, stunnin, yesssss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/34/Chappell_Roan_-_The_Rise_and_Fall_of_a_Midwest_Princess.png',
      isPublished: true,
      comment: '',
      likes: 180,
      isLiked: false,
      isCommented: false,
    },
    {
      id: 2,
      title: 'Album Review | Charlie XCX',
      author: 'Emilie',
      description: 'Brat',
      content:
        'Slayin, stunnin, yesssss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      image: 'https://img.rasset.ie/00209253-614.jpg?ratio=1',
      isPublished: true,
      comment: '',
      likes: 80,
      isLiked: false,
      isCommented: false,
    },
    {
      id: 3,
      title: 'Album Review | Billie Eilish',
      author: 'Emilie',
      description: 'Hit Me Hard and Soft',
      content:
        'Slayin, stunnin, yesssss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      image:
        'https://www.francetvinfo.fr/pictures/UI5V0DUM90Bj7Vv1AxS1-VendVQ/1200x1200/2024/05/16/hitmehardandsoft-6645f287dba62732570309.jpg',
      isPublished: true,
      comment: '',
      likes: 120,
      isLiked: false,
      isCommented: false,
    },
  ];

  // on reprend ici les informations de l'enfant pour pouvoir afficher le titre d'un article liké
  articleLikedtoDisplay!: string;
  handleArticleToDisplay(articleTitle: string) {
    console.log('hi');
    this.articleLikedtoDisplay = articleTitle;
  }
}
