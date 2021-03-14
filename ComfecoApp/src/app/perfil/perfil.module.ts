import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { FooterComponent } from '@app/shared/components-global/footer/footer.component';
import { NavComponent } from '@app/shared/components-global/nav/nav.component';
import { SharedModule } from '@app/shared/shared.module';
import { ViewComponent } from './components/view/view.component';
import { InsigniaComponent } from './components/insignia/insignia.component';


@NgModule({
  declarations: [PerfilComponent, ViewComponent, InsigniaComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
