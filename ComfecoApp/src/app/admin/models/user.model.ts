
export class user {

userName:string;
userId?:string;
isLider?:boolean;
email?:string;
whatsapp?:string;
discordUser?:string;
discordAlias?:string;
level?:number;
token?:string;
lastVisited?:Date;
team?:boolean;
teamId?:string;
photo?:string;
seniority:string;


/**
 *
 */
constructor(userName, level,teamId,isLider ) {
 this.userName=userName;
 this.level=level;
 this.teamId=teamId;
 this.isLider=isLider;
  
}

}