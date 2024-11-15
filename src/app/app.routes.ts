import { Routes } from '@angular/router';
import { HomePageComponent } from './articles-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { OneArticleComponent } from './one-article-page/one-article.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'article/:id',
    component: OneArticleComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'sign-up',
    component: RegisterPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
