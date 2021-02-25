import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  configNav;
  constructor() {
   this.configNav= {user:{name:true,nick:true,notification:true},items:[{name:'Home',link:'/home',active:true},{name:'Inscribite Aqui!',link:'/register'}]};
  }

  ngOnInit(): void {

  }

}
