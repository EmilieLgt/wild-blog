import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  // pour obtenir tous les articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  // pour obtenir un seul article par id : prend en paramètre un id,
  // celui de l'article de la page sur laquelel on est
  getOneArticleById(articleId: number): Observable<Article> {
    console.log(articleId);
    console.log(Observable<Article>);
    return this.http.get<Article>(
      `http://localhost:3000/articles/${articleId}`
    );
  }
}
