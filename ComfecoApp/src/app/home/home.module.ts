import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SwiperModule } from 'swiper/angular';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SharedModule } from '@app/shared/shared.module';




@NgModule({
  declarations: [HomeComponent, CardComponent, CardsComponent, SponsorsComponent, CountdownComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class HomeModule { }
