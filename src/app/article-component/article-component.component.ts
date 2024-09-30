import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  @Input() article!: Article;

  // sert à afficher la section commentaire si l'input est rempli
  toggleComments(): void {
    if (this.article.comment.length > 0) {
      this.article.isCommented = true;
    } else if (this.article.comment.length === 0) {
      this.article.isCommented = false;
    }
  }
  // ajout d'un like au compteur & passe isLiked à true
  addLike(): void {
    this.article.likes += 1;
    this.article.isLiked = true;
  }
  // passe la valeur de isPublished à sa valeur inverse: nous sert pour la méthode getCard à appliquer des styles différents
  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
  // style à appliquer à la carte si elle est publiée ou non
  getCard(isPublished: boolean) {
    return {
      'max-height': isPublished ? '1000px' : '0',
      opacity: isPublished ? '1' : '0',
      overflow: 'hidden',
      transition: 'all 0.2s ease',
    };
  }
  // récupération de l'id du params
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }

  //
}
