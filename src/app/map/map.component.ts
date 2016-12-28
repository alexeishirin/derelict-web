import { Component, OnInit, OnDestroy } from '@angular/core';
import { Map } from "./map.model";
import { Router, NavigationEnd } from '@angular/router';
import {MapsStoreService} from "./maps-store.service";

@Component({
  selector: 'app-map',
  host:{'flex':''},
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  maps: Map[];
  private mapsSubscription:any;

  constructor(private mapsStoreService: MapsStoreService, private router: Router) { }

  ngOnInit() {
    this.getMaps();
  }

  ngOnDestroy() {
    this.mapsSubscription.unsubscribe();
  }

  getMaps() {
    this.mapsSubscription = this.mapsStoreService.getMaps()
      .subscribe(
        maps => {
          console.log(maps);
          this.maps = maps;
        }
      )
  }
  
  deleteMap($event, map:Map) {
    $event.stopPropagation();
    this.mapsStoreService.deleteMap(map);
  }
}
