import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board.model';
import { Team } from '../models/team.model';
import { user } from '../models/user.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  board: Board = new Board('angular', [
    new Team('Angular23', [
      new user('Pedro', 23, 'id1',true),
      new user('Juan', 23, 'id1',false),
      new user('Geremias', 23, 'id1', false)
    ],
    'id1'
    ),
    new Team('Angular39', [
      new user('Jesse', 23, 'id2', false),
      new user('Diego', 23, 'id2', false),
      new user('Omar', 23, 'id2', false),
      new user('Jonathan', 23, 'id2', false),
      new user('Pablo', 23, 'id2', true),
         ],
      'id2'),
    new Team('Angular33', [
      new user('Lucia', 23, 'id3', false),
      new user('Robert', 23, 'id3', false),
      new user('Julio', 23, 'id3', false),
      new user('Francisco', 23, 'id3', true),
      new user('Rocio', 23, 'id3', false),
     
    ],
      'id3'),
    new Team('Angular24', [
      new user('German', 23, 'id4', false),
      new user('Victor', 23, 'id4', false),
      new user('Hernesto', 23, 'id4', false),
      new user('Vilma', 23, 'id4', true),
      new user('Analia', 23, 'id4', false),
    ],
      'id4')
  ]);

  ngOnInit() {

  }
  // testDrag(drag: CdkDrag, drop: CdkDropList){
    
  //   console.log(drag);
  //   console.log(drop);

  // }
  drop(event: CdkDragDrop<user[]>,teamId:string) {

    //console.log(teamId);
    /**
     * Saco posisiones  de donde vino y se graban los datos de los equipos
     * origen y equipo destino
     */
    const position = this.board.teams.findIndex(team =>team.teamId === teamId);
    const toTeam: user[] = event.container.data;
    const fromTeam: user[] = event.previousContainer.data;

    /**
     * Solo usamos el else que es cuando se cambia de team el user.
     * 
     */
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      
      /**
       * Validar que no haya dos lideres
       */
      const countLider = toTeam.filter((user) =>user.isLider===true );
     
      console.log(countLider);
      
      
      if (countLider.length > 1 ) {
        alert('Un Equipo no puede tener mas de un Lider')
      return false;
      }
      else{

        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);

        /**
         * Actualizacion de datos de los equipos
         * Busqueda del equipo que vino
         */

        const userToTeamId = toTeam.find(user => user.teamId !== teamId)
        const positionNewUser = toTeam.findIndex(user => user.teamId !== teamId)
        const positionBefore = this.board.teams.findIndex(team => team.teamId === userToTeamId.teamId);
        toTeam[positionNewUser].teamId = teamId;

        /**
         * Grabar cambios
         */
        this.board.teams[positionBefore].usersTeam = fromTeam;
        this.board.teams[position].usersTeam = toTeam;

      }
     
      console.log(fromTeam);
      console.log(toTeam);
    }
  }

}
