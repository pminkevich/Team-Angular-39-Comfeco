import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@app/shared/components-global/footer/footer.component';
import { NavComponent } from '@app/shared/components-global/nav/nav.component';
import { RouterModule } from '@angular/router';
import { InsigniasComponent } from './components/insignias/insignias.component';
import { CardEventsComponent } from './components/card-events/card-events.component';
import { SwiperModule } from 'swiper/angular';
import { FormEditUserComponent } from './components/form/form-edit-user/form-edit-user.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FooterComponent,NavComponent, InsigniasComponent, CardEventsComponent, FormEditUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  exports: [FooterComponent, NavComponent,InsigniasComponent,CardEventsComponent,FormEditUserComponent]
})
export class SharedModule { }
