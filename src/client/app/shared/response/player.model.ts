export interface IPlayer {
  name:string;
  points:number;
}

//adding the id as it is added by mongoose
export class Player implements IPlayer {
  _id:string;
  name:string;
  points:number;
}
