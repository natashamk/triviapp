import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { _createDefaultCookieXSRFStrategy } from '@angular/http/src/http_module';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  //var genre = "";
  constructor(private router: Router, private _dataService: DataService) { }

  ngOnInit() {
  }
  logout() {
    this.router.navigate(['']);  
  }
  submit(genre) {
    this._dataService.apiGenre(genre);
    this.router.navigate(['/quiz']);    
  }
}
