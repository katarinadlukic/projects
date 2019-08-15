import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent }from './../../pages/homepage/homepage.component';
import { ComponentsComponent } from '../../pages/homepage/components/components.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
