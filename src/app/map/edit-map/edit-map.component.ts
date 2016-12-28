import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Map } from "../map.model";
import {MapsStoreService} from "../maps-store.service";
import {map} from "rxjs/operator/map";

@Component({
  selector: 'app-add-map',
  host:{'flex':''},
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.scss']
})
export class EditMapComponent implements OnInit, OnDestroy {

  private mapSubscription:any;
  map: Map = new Map();
  constructor(private route: ActivatedRoute, private router: Router, private mapsStoreService: MapsStoreService) { }

  ngOnInit() {
    this.getMap();
  }
  
  ngOnDestroy() {
    this.mapSubscription.unsubscribe();
  }
  
  getMap() {
    this.mapSubscription = this.route.params
      .map(params => params['mapId'])
      .switchMap(id => this.mapsStoreService.getMap(id))
      .subscribe(map => this.map = map);
  }

  save() {
    this.mapsStoreService.upsertMap(this.map)
      .subscribe(map => {
        this.router.navigate(["../../"], {relativeTo: this.route});
      })
  }

}
