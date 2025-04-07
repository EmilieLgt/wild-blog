import { Routes } from '@angular/router';
import { HomePageComponent } from './articles-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { OneArticleComponent } from './one-article-page/one-article.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { authGuard } from './guards/auth.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { roleGuard } from './guards/role-guard.guard';
import { visitorOnlyGuard } from './guards/visitor-only.guard';

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
    canActivate: [visitorOnlyGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [visitorOnlyGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [roleGuard('admin')],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
