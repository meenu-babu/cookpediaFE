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
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

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
    AdminRoutingModule,SearchPipe,FormsModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,HighchartsChartComponent
  ]
})
export class AdminModule { }
