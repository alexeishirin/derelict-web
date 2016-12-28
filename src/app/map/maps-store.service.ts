import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Map } from './map.model';
import {Observable} from "rxjs/Observable";
import {MapsService} from "./maps.service";
import {Hex} from "../hex/hex.model";

@Injectable()
export class MapsStoreService {
  private mapsSubject: BehaviorSubject<Map[]> = new BehaviorSubject([]);
  private currentMapSubject:BehaviorSubject<Map> = new BehaviorSubject(null);

  constructor(private mapsService: MapsService) {
    this.refreshMapsSubject();
  }

  refreshMapsSubject() {
    this.mapsService.getMaps().subscribe(maps => {
      this.mapsSubject.next(maps);
    });
  }

  refreshCurrentMapSubject(mapId) {
    this.mapsService.getMap(mapId).subscribe(map => {
      this.currentMapSubject.next(map);
    });
  }

  getMaps() : Observable<Map[]> {
    return this.mapsSubject.asObservable();
  }

  getMap(id) : Observable<Map> {
    let currentMap:Map = this.currentMapSubject.getValue();
    if( currentMap == null || currentMap.id != id) {
      this.refreshCurrentMapSubject(id);
    }
    
    return this.currentMapSubject.asObservable();
  }
  
  getCurrentMap() : Observable<Map> {
    return this.currentMapSubject.asObservable();
  }
  
  deleteMap(map:Map) : Observable<Map> {
    let backendObservable = this.mapsService.deleteMap(map).cache();

    backendObservable.subscribe(() => this.refreshMapsSubject());

    return backendObservable;
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

  deleteHex(hex:Hex) : Observable<Hex> {
    let backendObservable = this.mapsService.deleteHex(hex).cache();

    backendObservable.subscribe(() => this.refreshCurrentMapSubject(hex.mapId));

    return backendObservable;
  }

  createHex(mapId:any, hex:Hex) : Observable<Hex> {
    let backendObservable = this.mapsService.createHex(mapId, hex).cache();

    backendObservable.subscribe(() => this.refreshCurrentMapSubject(mapId));

    return backendObservable;
  }

  updateHex(mapId:any, hex : Hex) : Observable<Hex> {
    let backendObservable = this.mapsService.updateHex(mapId, hex).cache();

    backendObservable.subscribe(() => this.refreshCurrentMapSubject(mapId));

    return backendObservable;
  }

  upsertHex (mapId:any, hex: Hex): Observable<Hex> {
    if(hex.id) {
      return this.updateHex(mapId, hex);
    }

    return this.createHex(mapId, hex);
  }
  
  getHex(mapId, hexId): Observable<Hex> {
    return this.mapsService.getHex(mapId, hexId);
  }

}
