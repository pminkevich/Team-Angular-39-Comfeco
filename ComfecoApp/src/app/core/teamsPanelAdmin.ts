import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Board } from "@app/core/models/board.model";
import { User } from "@app/core/models/user.model";

export class TeamsPanel{

  board: Board ;
  reCalculating:boolean;
/**
 *
 */
constructor() {
 

}
  drop(event: CdkDragDrop<User[]>, teamId: string) {
    //console.log(event.previousContainer);
   // console.log(event.container);
    //console.log(event.item.data);

       /**
     * Saco posisiones  de donde vino y se graban los datos de los equipos
     * origen y equipo destino
     */
    const position = this.board.teams.findIndex(team => team.teamId === teamId);
    const toTeam: User[] = event.container.data;
    const fromTeam: User[] = event.previousContainer.data;
    const userToTeam:User = event.item.data;
    /**
     * Solo usamos el else que es cuando se cambia de team el user.
     * 
     */
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      //console.log('son iguales');
    } else {
     
      /**
       * Validar que no haya dos lideres
       */
      //console.log(toTeam);
      //console.log(toTeam.length);
      const countLider = toTeam.filter(user => user.isLider);

      //console.log(countLider);


      if (countLider.length > 0 && userToTeam.isLider ) {
        alert('Un Equipo no puede tener mas de un Lider')
        return false;
      }
      else {
        this.reCalculating = true;
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);

        /**
         * Actualizacion de datos de los equipos
         * Busqueda del equipo que vino
         */

        
        const positionNewUser = toTeam.findIndex(user => user.teamId !== teamId)
        const positionBefore = this.board.teams.findIndex(team => team.teamId === userToTeam.teamId);
        toTeam[positionNewUser].teamId = teamId;

        /**
         * Grabar cambios
         */
       
        this.board.teams[position].usersTeam = fromTeam;
        this.board.teams[positionBefore].usersTeam = toTeam;
      
        setTimeout(() => {
         this.board.teams[positionBefore].usersTeam = fromTeam;
         this.board.teams[position].usersTeam = toTeam;
       }, 2); 
        this.reCalculating = false;
      }

      console.log(fromTeam);
      console.log(toTeam);
    }
  }


}