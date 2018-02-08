import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { SelectionComponent } from './selection/selection.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { Router } from '@angular/router'


const routes: Routes = [
{path: '', pathMatch: "full", component: LoginregComponent},
{path: 'selectquiz', pathMatch: "full", component: SelectionComponent},
{path: 'quiz', pathMatch: "full", component: QuizComponent},
{path: 'result', pathMatch: "full", component: ResultComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }