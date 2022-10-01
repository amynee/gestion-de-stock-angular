import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlePageComponent } from './pages/articles/article-page/article-page.component';
import { ArticleDetailsComponent } from './pages/articles/article-details/article-details.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ActionsButtonsComponent } from './components/actions-buttons/actions-buttons.component';
import { NewArticleComponent } from './pages/articles/new-article/new-article.component';
import { MvtstkComponentComponent } from './pages/mvtstk/mvtstk-component/mvtstk-component.component';
import { DetailsMvtStkArticleComponent } from './components/details-mvt-stk-article/details-mvt-stk-article.component';
import { MvtStkDetailsComponent } from './components/mvt-stk-details/mvt-stk-details.component';
import { CltsFrsDetailsComponent } from './components/clts-frs-details/clts-frs-details.component';
import { ClintPageComponent } from './pages/client/clint-page/clint-page.component';
import { FournisseurPageComponent } from './pages/fournisseur/fournisseur-page/fournisseur-page.component';
import { NewCltFrsComponent } from './components/new-clt-frs/new-clt-frs.component';
import { CmdCltFrsDetailsComponent } from './components/cmd-clt-frs-details/cmd-clt-frs-details.component';
import { CmdDetailsComponent } from './components/cmd-details/cmd-details.component';
import { CmdCltFrsPageComponent } from './pages/cmd-clt-frs-page/cmd-clt-frs-page.component';
import { NewCmdCltFrsComponent } from './components/new-cmd-clt-frs/new-cmd-clt-frs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardPageComponent,
    StatisticsPageComponent,
    MenuComponent,
    HeaderComponent,
    ArticlePageComponent,
    ArticleDetailsComponent,
    PaginationComponent,
    ActionsButtonsComponent,
    NewArticleComponent,
    MvtstkComponentComponent,
    DetailsMvtStkArticleComponent,
    MvtStkDetailsComponent,
    CltsFrsDetailsComponent,
    ClintPageComponent,
    FournisseurPageComponent,
    NewCltFrsComponent,
    CmdCltFrsDetailsComponent,
    CmdDetailsComponent,
    CmdCltFrsPageComponent,
    NewCmdCltFrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
