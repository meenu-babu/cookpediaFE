import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { DownloadList } from './download-list/download-list';
import { UserList } from './user-list/user-list';
import { RequestList } from './request-list/request-list';
import { RecipeList } from './recipe-list/recipe-list';
import { ManageRecipe } from './manage-recipe/manage-recipe';
import { Sidebar } from './sidebar/sidebar';


@NgModule({
  declarations: [
    Dashboard,
    DownloadList,
    UserList,
    RequestList,
    RecipeList,
    ManageRecipe,
    Sidebar
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
