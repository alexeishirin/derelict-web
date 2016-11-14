import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import {PlayerService} from "../shared/response/player.service";
import {Player} from "../shared/response/player.model";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'melody-standings',
  templateUrl: 'standings.component.html',
  styleUrls: ['standings.component.css'],
})

export class StandingsComponent implements OnInit{
  ngOnInit():void {
    this.getPlayers();
  }

  constructor(public playerService:PlayerService) {

  }

  getPlayers() {
    this.playerService.get()
      .subscribe(
        players => this.players = players
      );
  }
  players: Player[];

  plusOnePoint(player:Player){
    this.playerService.playerWon(player._id);
  }
  clear(){
    this.players = this.playerService.clearPoints();
  }
  removePlayers(){
    this.playerService.deleteAll()
      .subscribe(
        players => this.players = players
      );
  }

}
