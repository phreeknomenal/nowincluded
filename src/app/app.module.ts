import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PersonalIntroComponent } from './components/personal-intro/personal-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    IntroComponent,
    SubheaderComponent,
    IntroduceComponent,
    PersonalComponent,
    PersonalIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
