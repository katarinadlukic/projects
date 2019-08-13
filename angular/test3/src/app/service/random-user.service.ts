import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }
  
  url = "https://randomuser.me/api/?results=4";
  getRandomUsers(){
    return this.http.get(this.url).subscribe(
     (data)=> {
       console.log(data)
     },
    (error)=> {
      console.log(error.message)
    }
    );
  }
}
