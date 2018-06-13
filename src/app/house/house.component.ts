import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GotHttpService } from '../got-http.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers:[Location]
})
export class HouseComponent implements OnInit , OnDestroy{

  public currentHouse;

  constructor(private _route: ActivatedRoute, private router:Router, public gotHttpService:GotHttpService, private location: Location,private spinner: SpinnerVisibilityService) { 
    this.spinner.show();
  }

  ngOnInit() {

    

  this._route.params.subscribe(param => {
    this.spinner.show();
    let myUrlId = this._route.snapshot.paramMap.get('urlId');

    console.log( myUrlId);
   
    this.currentHouse = this.gotHttpService.getSingleHouseInformation(myUrlId).subscribe(   //this is getting book data
      data => {
        
          this.currentHouse = data;
          
          console.log(this.currentHouse);
          this.spinner.hide();
         
       
      },
      error => {
        console.log(error.errorMessage);
        
        
      });

  });


}

    //for getting id of categories like character,house,books
    public getId = (url): string => {
      let pos = url.lastIndexOf('/');
      let id = url.substr(pos + 1);
      return id;
    }; //end

  
  public gobackToPreviousPage(): any{
    this.location.back();
  }

  
  ngOnDestroy(){
    console.log(" OnDestroyCalled");
  }
}
