import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/Article';
import { ArticleComponent } from '../articles/articles.component';
import { OneArticleComponent } from '../one-article/one-article.component';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'home-page-component',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ArticleComponent,
    OneArticleComponent,
    HttpClientModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [ApiService],
})
export class HomePageComponent {
  articles: Article[] = [];
  private apiService = inject(ApiService);

  articleLikedtoDisplay!: string;

  ngOnInit() {
    this.apiService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }
  // on reprend ici les informations de l'enfant pour pouvoir afficher le titre d'un article liké
  handleArticleToDisplay(articleTitle: string) {
    this.articleLikedtoDisplay = articleTitle;
  }
}
