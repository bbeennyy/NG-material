import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//components import
import { ShopsComponent } from './components/shops/shops.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes:Routes = [
    {
        path:'shops',
        component: ShopsComponent,
    },
    {
        path:'home',
        component: HomeComponent,
    },
    {
        path:'about',
        component: AboutComponent,
    },
    {
        path:'signup',
        component: SignupComponent,
    },
    {
        path:'login',
        component: LoginComponent,
    }


];
 //import this var into app.module
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);