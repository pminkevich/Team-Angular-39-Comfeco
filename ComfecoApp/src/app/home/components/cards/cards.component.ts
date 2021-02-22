import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit,OnChanges {
@Input() team:string;

  constructor() { 

}
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  }

onCircle(team:string){

this.team=team;

}
}
