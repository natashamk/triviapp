import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginregComponent } from './loginreg/loginreg.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectionComponent } from './selection/selection.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginregComponent,
    QuizComponent,
    SelectionComponent,
    ResultComponent
  ],
  imports: [
    HttpModule,
    BrowserModule, AppRoutingModule,
    FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
