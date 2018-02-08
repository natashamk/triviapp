import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions;
  score = 0
  userAnswer = ""
  //selected = ""
  constructor(private _dataService: DataService) {
    this.questions = this._dataService.actualQuestions;
  }
  onSubmit(formData) {
    this.userAnswer = formData.ans_selected;
    if(this.questions.length>1){
      if(this.userAnswer==this.questions[0].answer)
      this.score++
      this.questions.shift()
    }
    else {
      if(this.userAnswer==this.questions[0].answer)
      this.score++
      //this.questions.shift()
      console.log("Score is "+this.score)
    }
  }
}
