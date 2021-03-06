import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';

@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [CommonModule, ElementsRoutingModule],
})
export class ElementsModule {}
