import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Map } from './map.model';
import {Observable} from "rxjs/Observable";
import {HttpService} from "../auth/http.service";
import {APP_CONFIG} from "../app.config";

import 'rxjs/add/observable/of';
import {Hex} from "../hex/hex.model";

@Injectable()
export class MapsService {
  private apiEndPointBase:string = this.appConfig.apiEndpoint + "/maps";

  constructor(@Inject(APP_CONFIG) private appConfig, private httpService : HttpService) { }

  getMaps() : Observable<Map[]> {
    return this.httpService.get(this.apiEndPointBase + "?filter[include]=hexes");
  }

  getMap(id) : Observable<Map> {
    if(id == "new" || id == null) {
      let newMap = new Map();
      newMap.name = "new";

      //noinspection TypeScriptUnresolvedFunction
      return Observable.of(newMap);
    }
    
    return this.httpService.get(this.apiEndPointBase + "/" + id + "?filter[include]=hexes");
  }

  createMap(newMap : Map) : Observable<Map> {
    return this.httpService.post(this.apiEndPointBase, newMap);
  }

  updateMap(map : Map) : Observable<Map> {
    return this.httpService.put(this.apiEndPointBase + "/" + map.id, map);
  }

  deleteMap(map : Map) : Observable<Map> {
    return this.httpService.delete(this.apiEndPointBase + `/${map.id}`);
  }

  createHex(mapId:any, hex:Hex) : Observable<Hex> {
    return this.httpService.post(this.apiEndPointBase + `/${mapId}/hexes`, hex);
  }

  updateHex(mapId:any, hex : Hex) : Observable<Hex> {
    return this.httpService.put(this.apiEndPointBase + `/${mapId}/hexes/${hex.id}`, hex);
  }

  deleteHex(hex:Hex) : Observable<Hex> {
    return this.httpService.delete(this.apiEndPointBase + `/${hex.mapId}/hexes/${hex.id}`);
  }

  getHex(mapId, hexId) : Observable<Hex> {
    if(hexId == "new" || hexId == null) {
      //noinspection TypeScriptUnresolvedFunction
      return Observable.of(new Hex());
    }
    
    return this.httpService.get(this.apiEndPointBase + `/${mapId}/hexes/${hexId}`)
  }

}
