import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/service/random-user.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {


  constructor(private userService: RandomUserService ) { }

  ngOnInit() {
    this.userService.getRandomUsers()
  }

}
