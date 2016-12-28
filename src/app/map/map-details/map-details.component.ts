import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Map } from "../map.model";
import {MapsStoreService} from "../maps-store.service";

@Component({
  selector: 'app-map-details',
  host:{'flex':''},
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss']
})
export class MapDetailsComponent implements OnInit {

  private mapSubscription:any;
  private routerSubscription:any;
  map: Map;
  constructor(private route: ActivatedRoute, private router: Router, private mapsStoreService: MapsStoreService) { }

  ngOnInit() {
    this.getMap();
  }

  ngOnDestroy() {
    this.mapSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  getMap() {
    this.routerSubscription = this.route.params
      .map(params => params['mapId'])
      .subscribe(id => this.mapsStoreService.refreshCurrentMapSubject(id));
    
    this.mapSubscription = this.mapsStoreService.getCurrentMap()
      .subscribe(map => this.map = map);
  }

}
