import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"

@Injectable()
export class SearchService {

   constructor(private _http : Http) {
    
   }

   getData(searchStr : string){

    return this._http.get("https://api.spotify.com/v1/search?q=" + searchStr + "&type=artist")
                     .map(res =>  res.json());

   }

}
