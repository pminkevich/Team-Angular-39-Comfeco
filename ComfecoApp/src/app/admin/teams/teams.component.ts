import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  board: Board = new Board('angular', [
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column('angular39', [
      "10",
      "jesse",
      "23",
      "jorge",
      "45",
      "pedro",
      "78"
    ]),
    new Column('Todo', [
      "10",
      "juan",
      "23",
      "pedro9",
      "45",
      "pedro",
      "78"
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  ngOnInit() {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
