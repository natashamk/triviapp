import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Userexists } from '../userexists';
import { Data } from '@angular/router/src/config';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {

  constructor(private router: Router, private _dataService: DataService) { }
  user = new User()
  verifyUser = new Userexists()
  passwordConf: String = ""
  ngOnInit() {
  }
  onSubmit(f){ 
    this.user = new User(f.username, f.firstname, f.email, f.password, this.user.score)
    this._dataService.createUser(this.user)
    this.router.navigate(['/selectquiz']);   
  }
  verifyUserInfo(f){ 
    this.verifyUser = new Userexists(f.username, f.password)
    this._dataService.verifyUser(this.verifyUser)
    this.router.navigate(['/selectquiz']);       
  }
}
