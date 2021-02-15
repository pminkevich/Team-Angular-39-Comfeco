import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Board } from "@app/admin/models/board.model";
import { user } from "@app/admin/models/user.model";

export class TeamsPanel{

  board: Board ;
/**
 *
 */
constructor() {
 

}
  drop(event: CdkDragDrop<user[]>, teamId: string) {

    //console.log(teamId);
    /**
     * Saco posisiones  de donde vino y se graban los datos de los equipos
     * origen y equipo destino
     */
    const position = this.board.teams.findIndex(team => team.teamId === teamId);
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
      console.log(toTeam);
      const countLider = toTeam.filter(user => user.isLider);

      console.log(countLider);


      if (countLider.length > 1) {
        alert('Un Equipo no puede tener mas de un Lider')
        return false;
      }
      else {

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