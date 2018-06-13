import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerVisibilityService } from 'ng-http-loader';

import { PROP_METADATA } from '@angular/core/src/util/decorators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  

   public allData= [];
   public final;
   public books;
   public characters;
   public houses;
 
  constructor( private gotHttp: GotHttpService,private spinner: SpinnerVisibilityService) {
    this.spinner.show();
    console.log("Home component constructor is called")
   } 

  ngOnInit() {
    console.log("Home component ngOnInit is called")
    this.spinner.show();

    this.gotHttp.getBooks().subscribe(

      data=>{
        setTimeout(() =>{
        this.books = data;
        this.allData.push(this.books);
          this.final = [].concat(...this.allData);
          console.log(this.final);
          this.spinner.hide();
          
        },1500)
    
    },
    error =>{
      console.log("some error occurrd")
      console.log(error.errorMessage)
    });
    

    this.gotHttp.getHouses().subscribe(

      data=>{
        setTimeout(() =>{
        this.houses =data;
        this.allData.push(this.houses);
        this.final = [].concat(...this.allData);
        console.log(this.final);
        this.spinner.hide();
        
      },1500)
    },
    error =>{
      console.log("some error occurrd")
      console.log(error.errorMessage)
    });
    

    this.gotHttp.getCharacters().subscribe(

      data=>{
        setTimeout(() =>{ 
        this.characters = data;
        this.allData.push(this.characters);
        this.final = [].concat(...this.allData);  
        console.log(this.final);
        this.spinner.hide();
        
        },1500)
    },
    error =>{
      console.log("some error occurrd")
      console.log(error.errorMessage)
    });
  }

  //for getting id of categories like character,house,books
  
  public getId = (url: string): string => {
    let pos = url.lastIndexOf('/');
    let id = url.substr(pos + 1);
    return id;
  }; //end
  

  ngOnDestroy(){
    console.log("Home component ngOnDestroy is called")

  }

}
