import { Component, inject } from '@angular/core';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-article',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './one-article.component.html',
  styleUrl: './one-article.component.scss',
})
export class OneArticleComponent {
  article$!: Observable<Article>;
  http = inject(HttpClient);

  articleId!: number;

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('hii');
      this.articleId = Number(params.get('id'));
      this.article$ = this.http.get<Article>(
        `http://localhost:3000/articles/${this.articleId}`
      );
    });
  }
}
