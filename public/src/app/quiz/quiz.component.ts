import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions;
  score = 0
  userAnswer = ""
  constructor(private _dataService: DataService, private router: Router) {
    this.questions = this._dataService.actualQuestions;
  }

  ngOnInit() {
  }
  
  onSubmit(formData) {
    this.userAnswer = formData.ans_selected
    if(this.questions.length>1){
      if(this.userAnswer==this.questions[0].answer)
      this._dataService.score = ++this.score
      this.questions.shift()
    }
    else {
      if(this.userAnswer==this.questions[0].answer)
      this.score++
      this._dataService.score = this.score
      this.router.navigate(['/result'])   
      console.log("Score is "+this.score)
    }
  }

  resultRoute(){
  this.router.navigate(['/result'])
  }
}




  
  
