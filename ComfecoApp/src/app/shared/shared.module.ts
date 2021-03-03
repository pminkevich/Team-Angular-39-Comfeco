import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@app/shared/components-global/footer/footer.component';
import { NavComponent } from '@app/shared/components-global/nav/nav.component';
import { RouterModule } from '@angular/router';
import { InsigniasComponent } from './compnents/insignias/insignias.component';
import { CardEventsComponent } from './compnents/card-events/card-events.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [FooterComponent,NavComponent, InsigniasComponent, CardEventsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [FooterComponent, NavComponent,InsigniasComponent,CardEventsComponent]
})
export class SharedModule { }
