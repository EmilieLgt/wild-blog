import { Component, inject } from '@angular/core';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-one-article',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './one-article.component.html',
  styleUrl: './one-article.component.scss',
})
export class OneArticleComponent {
  article$!: Observable<Article>;
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  articleId!: number;

  ngOnInit() {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));

    // Appeler ApiService pour obtenir l'article
    if (articleId) {
      this.article$ = this.apiService.getOneArticleById(articleId);
    }
  }
}
