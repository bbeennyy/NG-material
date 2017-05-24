import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Router
import { routing } from './app.routes';


//material design import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdButtonModule,MdSidenavModule,MdInputModule, MdCardModule,MdTabsModule,MdAutocompleteModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';


//components 
import { ShopsComponent } from './components/mainmenu/shops/shops.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/mainmenu/home/home.component';
import { AboutComponent } from './components/mainmenu/about/about.component';
import { SignupComponent } from './components/mainmenu/signup/signup.component';
import { LoginComponent } from './components/mainmenu/login/login.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';

//services


@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    ItemlistComponent
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
    MdAutocompleteModule,
    MdTabsModule,
    MdSidenavModule,
    MdInputModule,
    MdGridListModule
    ,

    //router
    routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
