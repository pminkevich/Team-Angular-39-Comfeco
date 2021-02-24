import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HomeComponent, CardComponent, CardsComponent, SponsorsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
