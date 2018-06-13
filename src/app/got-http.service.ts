import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isProtractorLocator } from 'protractor/built/locators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



@Injectable({
  providedIn: 'root'
})
export class GotHttpService {
  public allData;
  public currentData;
  public baseUrl = 'https://anapioficeandfire.com/api'


  constructor(private http: HttpClient) {
    console.log("Blog Http service was called");
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http call');
    console.log(err.message);
    return Observable.throw(err.message)
  }

  //Method to return all books
  public getBooks(): any {
    let myResponse = this.http.get(this.baseUrl + '/books')
    console.log(myResponse)
    return myResponse
  }

  //Method to return all Houses
  public getHouses(): any {
    let myResponse = this.http.get(this.baseUrl + '/houses')
    console.log(myResponse)
    return myResponse
  }

  //Method to return all Characters
  public getCharacters(): any {
    let myResponse = this.http.get(this.baseUrl + '/characters')
    console.log(myResponse)
    return myResponse
  }

  // method to get a particular book

   public getSingleBookInformation(id): any {
    let myResponse = this.http.get( `${this.baseUrl}/books/${id}` );
    console.log(myResponse )
    return myResponse;

  }

  // method to get a particular house

  public getSingleHouseInformation(id): any {
    let myResponse = this.http.get(`${this.baseUrl}/houses/${id}`);
    console.log(myResponse )
    return myResponse;

  }

  // method to get a particular character

  public getSingleCharacterInformation(id): any {
    let myResponse = this.http.get(`${this.baseUrl}/characters/${id}`);
    console.log(myResponse )
    return myResponse;

  } 



}