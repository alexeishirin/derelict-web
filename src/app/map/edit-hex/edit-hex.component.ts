import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MapsStoreService} from "../maps-store.service";
import {map} from "rxjs/operator/map";
import {Hex} from "../../hex/hex.model";

@Component({
  selector: 'app-edit-hex',
  host:{'flex':''},
  templateUrl: './edit-hex.component.html',
  styleUrls: ['./edit-hex.component.scss']
})
export class EditHexComponent implements OnInit {
  private hexSubscription:any;
  hex: Hex = new Hex();
  mapId:any;
  constructor(private route: ActivatedRoute, private router: Router, private mapsStoreService: MapsStoreService) { }

  ngOnInit() {
    this.getMap();
  }

  ngOnDestroy() {
    this.hexSubscription.unsubscribe();
  }

  getMap() {
    this.hexSubscription = this.route.params
      .switchMap(params => {
        this.mapId = params['mapId'];
        return this.mapsStoreService.getHex(params['mapId'], params['hexId']);
      })
      .subscribe(hex => this.hex = hex);
  }

  save() {
    this.mapsStoreService.upsertHex(this.mapId, this.hex)
      .subscribe(hex => {
        this.router.navigate(["../../../"], {relativeTo: this.route});
      })
  }

}
