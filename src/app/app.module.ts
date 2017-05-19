import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Router
import { routing } from './app.routes';


//material design import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';


//components 
import { ShopsComponent } from './components/shops/shops.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

//services


@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    //import each component that u want to use from https://material.angular.io/components
    ,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,

    //router
    routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
