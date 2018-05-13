import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { SliderAreaComponent } from './main-page/slider-area/slider-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { BoySaleAreaComponent } from './main-page/boy-sale-area/boy-sale-area.component';
import { CountAreaComponent } from './main-page/count-area/count-area.component';
import { WelcomeAreaComponent } from './main-page/welcome-area/welcome-area.component';
import { PropertyAreaComponent } from './main-page/property-area/property-area.component';
import { LoginComponent } from './login-page/login/login.component';
import { RegisterComponent } from './login-page/register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NavigationbarComponent,
    SliderAreaComponent,
    FooterAreaComponent,
    BoySaleAreaComponent,
    CountAreaComponent,
    WelcomeAreaComponent,
    PropertyAreaComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    MainPageComponent,
    SubmitPageComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
