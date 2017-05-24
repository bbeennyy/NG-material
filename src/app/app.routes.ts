import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//components import
import { ShopsComponent } from './components/mainmenu/shops/shops.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/mainmenu/home/home.component';
import { AboutComponent } from './components/mainmenu/about/about.component';
import { SignupComponent } from './components/mainmenu/signup/signup.component';
import { LoginComponent } from './components/mainmenu/login/login.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';

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
    },
    {
        path:'itemlist',
        component: ItemlistComponent,
    }


];
 //import this var into app.module
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);