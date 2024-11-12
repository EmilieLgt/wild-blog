import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/Article';
import { ArticleComponent } from '../articles/articles.component';
import { RouterModule } from '@angular/router';
import { OneArticleComponent } from '../one-article/one-article.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'home-page-component',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ArticleComponent,
    OneArticleComponent,
    HttpClientModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  articles$!: Observable<Article[]>;

  http = inject(HttpClient);

  ngOnInit() {
    this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');
  }
  // on reprend ici les informations de l'enfant pour pouvoir afficher le titre d'un article liké
  articleLikedtoDisplay!: string;
  handleArticleToDisplay(articleTitle: string) {
    this.articleLikedtoDisplay = articleTitle;
  }
}
