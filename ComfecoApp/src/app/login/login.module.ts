import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './page/register/register.component';
import { Step2Component } from './page/step2/step2.component';
import { QuestionsComponent } from './page/questions/questions.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, Step2Component, QuestionsComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
