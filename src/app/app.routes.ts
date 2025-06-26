import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';
import { Recipe } from './recipe/recipe';
import { Profile } from './profile/profile';
import { SavedRecipe } from './saved-recipe/saved-recipe';
import { ViewRecipe } from './view-recipe/view-recipe';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [

// path for lazy loading
{
    path:'admin',loadChildren:()=>import('./admin/admin-module').then(m=>m.AdminModule)
},

    // define path to load specific components
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'all-recipe',component:Recipe},
    {path:'profile',component:Profile},
    {path:'saved-recipe',component:SavedRecipe},
    // BINDING ID DYNAMICALLY IN PATH
    {path:'recipe/:id/view',component:ViewRecipe},
    // manage path that page not found
    // for that we use wild card path
    {path:'**',component:PageNotFound}

];
