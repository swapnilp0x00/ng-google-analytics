import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutOneComponent } from './about-one/about-one.component';
import { AboutTwoComponent } from './about-two/about-two.component';


@NgModule({
  declarations: [AboutComponent, AboutOneComponent, AboutTwoComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
