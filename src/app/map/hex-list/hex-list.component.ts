import { Component, OnInit, Input } from '@angular/core';
import {Hex} from "../../hex/hex.model";
import {MapsStoreService} from "../maps-store.service";

@Component({
  selector: 'derelict-hex-list',
  templateUrl: './hex-list.component.html',
  styleUrls: ['./hex-list.component.scss']
})
export class HexListComponent implements OnInit {
  @Input() hexes: Hex[];

  constructor(private mapsStoreService: MapsStoreService) { }

  ngOnInit() {
  }

  deleteHex($event, hex:Hex) {
    $event.stopPropagation();
    this.mapsStoreService.deleteHex(hex);
  }
}
