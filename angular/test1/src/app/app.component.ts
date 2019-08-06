import { Component } from '@angular/core';
import { Osoba } from './classes/osoba';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'test1';
  public disabled = false;
  public niz : Osoba[] = [
  {
    firstName: "ime1",
    lastName: "prezime2",
    age: 12,
    address: "Gandijeva 13",
    phoneNumber: "0648766776"
  },
  {
    firstName: "ime1",
    lastName: "prezime2",
    age: 12,
    address: "Gandijeva 13",
    phoneNumber: "0648766776"
  },
  {
    firstName: "ime1",
    lastName: "prezime2",
    age: 12,
    address: "Gandijeva 13",
    phoneNumber: "0648766776"
  }
  ];

}
