import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime'; //Wait for sometime in between request
import 'rxjs/add/operator/distinctUntilChanged' //check whether value changed, does not respond to keyup, keydown etc..
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl();

  artists = [];

  isLoading = false;

  constructor(private _searchService : SearchService) { 

  }

  ngOnInit() {

      this.searchControl.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .subscribe(value => {   

          this.isLoading = true; 
          this._searchService.getData(value)
                            .subscribe(data => {
                                                      
                            this.artists = data.artists.items;
                            this.isLoading = false;

                            
                            });                  

      });

  }

}
