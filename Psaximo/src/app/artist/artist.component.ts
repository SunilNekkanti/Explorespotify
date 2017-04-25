import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {

  id;
  name;
  subscription;

  constructor(private _router : ActivatedRoute) {



   }

  ngOnInit() {

      this.subscription  = this._router.params.subscribe(params =>{

        this.id = params["id"];
        this.name = params["name"];
      
      });
  }

  ngOnDestroy(){

      this.subscription.unsubscribe();
  }

}
