import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewsHomeComponent } from './views-home/views-home.component';


@NgModule({
  declarations: [
    ViewsComponent,
    StatisticsComponent,
    ViewsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
