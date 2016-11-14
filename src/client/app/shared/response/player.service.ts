import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Player} from './player.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PlayerService {
  /**
   * The array of initial names provided by the service.
   * @type {Array}
   */
  players:Player[] = [];

  /**
   * Contains the currently pending request.
   * @type {Observable<string[]>}
   */
  private request:Observable<Player[]>;

  /**
   * Contains the currently pending request.
   * @type {Observable<string[]>}
   */
  private deleteRequest:Observable<any>;

  /**
   * Creates a new NewsService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http:Http) {
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource. If there was a previous successful request
   * (the local names array is defined and has elements), the cached version is returned
   * @return {string[]} The Observable for the HTTP request.
   */
  get():Observable<Player[]> {
    if (!this.request) {
      this.request = this.http.get('/api/player')
        .map((response:Response) => response.json())
        .map((data:Player[]) => {
          this.request = null;
          this.players = data;
          return this.players;
        });
    }

    return this.request;
  }

  deleteAll():Observable<any> {
    this.deleteRequest = this.http.delete('/api/player')
      .map((response:Response) => response.json())
      .map((data:Player[]) => {
        this.deleteRequest = null;
        return this.players = [];
      });

    return this.deleteRequest;
  }

  clearPoints():Player[] {
    this.players.forEach(function (player) {
      player.points = 0;
    });
    
    return this.players;
  }

  getPlayers(): Player[] {
    this.players = [
      {_id: '1', name: 'Леша', points: 0},
      {_id: '2', name: 'Лена', points: 0},
      {_id: '3', name: 'Катя Чумак', points: 0},
      {_id: '4', name: 'Аня', points: 0},
      {_id: '5', name: 'Катя Любецкая', points: 0},
      {_id: '6', name: 'Паша', points: 0},
      {_id: '7', name: 'Юля', points: 0},
      {_id: '8', name: 'Юра', points: 0},
      {_id: '9', name: 'Вика', points: 0},
      {_id: '10', name: 'Макс', points: 0}
    ];

    return this.players;
  }

  playerWon(playerId:String):void {
    console.log(playerId);
    console.log(this.players);
    if (this.players && this.players.length) {
      this.players.forEach(function (player) {
        if (player._id == playerId) {
          if(!player.points){
            player.points = 0;
          }
          player.points++;
          console.log(player);
        }
      });

      this.players.sort(function (playerOne, playerTwo){
        return playerTwo.points - playerOne.points;
      });
    }
  }

}

