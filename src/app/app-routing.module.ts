import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCltFrsComponent } from './components/new-clt-frs/new-clt-frs.component';
import { NewCmdCltFrsComponent } from './components/new-cmd-clt-frs/new-cmd-clt-frs.component';
import { ArticlePageComponent } from './pages/articles/article-page/article-page.component';
import { NewArticleComponent } from './pages/articles/new-article/new-article.component';
import { ClintPageComponent } from './pages/client/clint-page/clint-page.component';
import { CmdCltFrsPageComponent } from './pages/cmd-clt-frs-page/cmd-clt-frs-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FournisseurPageComponent } from './pages/fournisseur/fournisseur-page/fournisseur-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MvtstkComponentComponent } from './pages/mvtstk/mvtstk-component/mvtstk-component.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'inscrire',
    component: SignupPageComponent
  },
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: 'statistiques',
        component: StatisticsPageComponent
      },
      {
        path: 'articles',
        component: ArticlePageComponent

      },
      {
        path: 'nouvel-article',
        component: NewArticleComponent
      },
      {
        path: 'mouvement-de-stock',
        component: MvtstkComponentComponent
      },
      {
        path: 'clients',
        component: ClintPageComponent
      },
      {
        path: 'new-client',
        component: NewCltFrsComponent
      },
      {
        path: 'commandes-client',
        component: CmdCltFrsPageComponent
      },
      {
        path: 'nouvel-commande-client',
        component: NewCmdCltFrsComponent
      },
      {
        path: 'fournisseurs',
        component: FournisseurPageComponent
      },
      {
        path: 'new-fournisseur',
        component: NewCltFrsComponent
      },
      {
        path: 'commandes-fournisseur',
        component: CmdCltFrsPageComponent
      },
      {
        path: 'nouvel-commande-fournisseur',
        component: NewCmdCltFrsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
