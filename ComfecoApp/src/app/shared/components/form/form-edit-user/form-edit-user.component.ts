import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.css']
})
export class FormEditUserComponent implements OnInit {
  formEditUser: FormGroup;
  user;
  constructor(private authSvc: AuthService, private router: Router, private fb: FormBuilder) {

    this.authSvc.user$.subscribe(resp => {
      this.user = resp;
      console.log(resp);
      this.mostrarDatosUser();
    })

    this.formEditUser = this.fb.group({
      nickName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      genero: ['', Validators.required],
      FchNacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      areaConocimiento: ['', Validators.required],
      facebook: [''],
      github: [''],
      linkedin: [''],
      twitter: [''],
      biografia: [''],
    })
  }

  get nickName() { return this.formEditUser.get('nickName'); }
  get email() { return this.formEditUser.get('email'); }
  get password() { return this.formEditUser.get('password'); }
  get confirmPassword() { return this.formEditUser.get('confirmPassword'); }
  get genero() { return this.formEditUser.get('genero'); }
  get FchNacimiento() { return this.formEditUser.get('FchNacimiento'); }
  get areaConocimiento() { return this.formEditUser.get('areaConocimiento'); }
  get facebook() { return this.formEditUser.get('facebook'); }
  get github() { return this.formEditUser.get('github'); }
  get pailinkedins() { return this.formEditUser.get('linkedin'); }
  get twitter() { return this.formEditUser.get('twitter'); }
  get pais() { return this.formEditUser.get('pais'); }
  get biografia() { return this.formEditUser.get('biografia'); }
  ngOnInit(): void {

  }

  actualizar() {
    if (this.formEditUser.value.password != this.formEditUser.value.confirmPassword) {
      Swal.fire({
        title: 'Ojo!',
        text: "La contraseña y la confirmación deben ser iguales.",
        icon: 'info',
        confirmButtonText: 'Cool'
      })
    } else {
      this.authSvc.register(this.formEditUser.value).then((user) => {
        if (user && user.emailVerified) {
          this.router.navigate(['/suscriptor']);
        } else if (user) {
          Swal.fire({
            title: 'Alerta!',
            text: 'Se ha enviado un Email debe Confirmarlo!',
            icon: 'warning',
            confirmButtonText: 'Cool'
          })
          this.router.navigate(['/home']);
        }

      });
    }


    // console.log(this.formEditUser.value);
  }
  getErrorMessage(campo: string): string {

    switch (campo) {
      case 'nickName':
        if (this.nickName.hasError('required')) {
          return 'Debe Ingresar un Nick';
        }
      case 'genero':
        if (this.genero.hasError('required')) {
          return 'Debe Ingresar un genero';
        }
      case 'email':
        if (this.email.hasError('required')) {
          return 'Debe Ingresar Email';
        }
      case 'password':
        if (this.password.hasError('required')) {
          return 'Debe Ingresar un Password';
        }
      case 'confirmPassword':
        if (this.confirmPassword.hasError('required')) {
          return 'Debe Ingresar un confirmación de contraseña';
        }
      case 'FchNacimiento':
        if (this.FchNacimiento.hasError('required')) {
          return 'Debe Ingresar la fecha de nacimiento';
        }
      case 'pais':
        if (this.pais.hasError('required')) {
          return 'Debe Ingresar un pais';
        }
      case 'areaConocimiento':
        if (this.pais.hasError('required')) {
          return 'Debe Ingresar un area de conocimiento';
        }


    }


  }

  mostrarDatosUser(){
    this.formEditUser.get('nickName').setValue(this.user.nickName);
    this.formEditUser.get('email').setValue(this.user.email);
  }

  abrirRedSocial(host,value){
    let valor=this.formEditUser.get(value).value;
    if(valor){
      window.open(host + valor , '_blank');
    }
  }

}
