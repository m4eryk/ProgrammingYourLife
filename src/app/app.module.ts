import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/main-page/header/header.component';
import { HomeComponent } from 'src/app/main-page/home/home.component';
import { WhyWeComponent } from 'src/app/main-page/why-we/why-we.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { TutorialComponent } from 'src/app/main-page/tutorial/tutorial.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from 'src/app/main-page/footer/footer.component';
import { CardComponent } from './main-page/tutorial/card/card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WhyWeComponent,
    TutorialComponent,
    FooterComponent,
    CardComponent,
    LoginPageComponent,
    MainPageComponent,
    UserPageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'user',
        component: UserPageComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      }
      ])
    ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
