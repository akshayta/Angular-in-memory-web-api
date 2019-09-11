import { Component, OnInit } from '@angular/core';
import { UserData } from './user-data';
import { DataService } from './userdata.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  users: UserData[]=[];

  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users=data;
    });
  }

 
  ngOnInit(){
    this.getUsers();
    console.log('Akshay');
  }
}