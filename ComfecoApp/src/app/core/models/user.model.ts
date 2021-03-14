import { Roles } from "@app/shared/models/user.interface";

export class User {
uid:string;
emailVerified:boolean;
genero?:string;
FchNacimiento?:string;
pais?:string;
areaConocimiento?:string;
facebook?:string;
github?:string;
linkedin?:string;
twitter?:string;
biografia?:string;
name?:string;
nickName?:string;
userId?:string;
isLider?:boolean;
email:string;
whatsapp?:string;
discordUser?:string;
discordAlias?:string;
level?:number;
token?:string;
lastVisited?:Date;
team?:boolean;
teamId?:string;
photo?:string;
seniority?:string;
photoURL?:string;
displayName?:string;
role?:Roles;


/**
 *
 */
constructor(name, level,teamId,isLider ) {
 this.name=name;
 this.level=level;
 this.teamId=teamId;
 this.isLider=isLider;
  
}

}