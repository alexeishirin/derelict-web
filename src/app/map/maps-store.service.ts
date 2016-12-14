import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Map } from './map.model';
import {Observable} from "rxjs/Observable";
import {MapsService} from "./maps.service";

@Injectable()
export class MapsStoreService {
  private mapsSubject: BehaviorSubject<Map[]> = new BehaviorSubject([]);

  constructor(private mapsService: MapsService) {
    console.log("constructing");
    this.refreshMapsSubject();
  }
  
  refreshMapsSubject() {
    this.mapsService.getMaps().subscribe(maps => {
      this.mapsSubject.next(maps);
    });
  }

  getMaps() : Observable<Map[]> {
    return this.mapsSubject.asObservable();
  }
  
  getMap(id) : Observable<Map> {
    return this.mapsService.getMap(id);
  }

  createMap(newMap : Map) : Observable<Map> {
    let backendObservable = this.mapsService.createMap(newMap).cache();

    backendObservable.subscribe(() => this.refreshMapsSubject());

    return backendObservable;
  }

  updateMap(map : Map) : Observable<Map> {
    let backendObservable = this.mapsService.updateMap(map).cache();

    backendObservable.subscribe(() => this.refreshMapsSubject());

    return backendObservable;
  }
  
  upsertMap (map: Map): Observable<Map> {
    if(map.id) {
      return this.updateMap(map);
    }
    
    return this.createMap(map);
  }

}
