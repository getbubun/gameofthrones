import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { SpinnerVisibilityService } from 'ng-http-loader';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
 
})
export class BookComponent implements OnInit, OnDestroy {

  public currentBook;
  

  constructor(private _route: ActivatedRoute, private router:Router, public gotHttpService:GotHttpService,private spinner: SpinnerVisibilityService,private location: Location){
    this.spinner.show();
  } 
  ngOnInit() {
  
   
    this._route.params.subscribe(param => {
      this.spinner.show();
    let myUrlId = this._route.snapshot.paramMap.get('urlId');

    console.log( myUrlId);
    
    this.currentBook = this.gotHttpService.getSingleBookInformation(myUrlId).subscribe(   //this is getting book data
      data => {
        
          this.currentBook = data;
          console.log(this.currentBook);
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
