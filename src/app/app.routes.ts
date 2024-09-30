import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponentComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
