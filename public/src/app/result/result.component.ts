import { Component, OnInit } from '@angular/core';
import { _createDefaultCookieXSRFStrategy } from '@angular/http/src/http_module';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score: Number = 0;
  constructor(private _dataService: DataService, private router: Router) { 
    this.score = this._dataService.score;
  }

  ngOnInit() {
  }

  navtoQuiz(){
    this._dataService.score = 0;
    this.router.navigate(['/selectquiz']);  
  }
  navtoHome(){
    this._dataService.score = 0;
    this.router.navigate(['/']);  
  }
}
