export interface IResponse {
  name: string;
  playerId: string;
}

//adding the id as it is added by mongoose
export class PlayerResponse implements IResponse{
  _id: string;
  playerId: string;
  name: string;
}
