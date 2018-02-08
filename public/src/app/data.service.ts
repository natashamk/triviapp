import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../data';
import 'rxjs/add/operator/map';
import { User } from './user'
import { Userexists } from './userexists';

@Injectable()
export class DataService {
  dataObserver = new BehaviorSubject([]);
  data: any[] = [];
  album_info: any[] = []
  questions: String[] = []
  actualQuestions: any[] = []
  artistList: String[] = []
  albumList: String[] = []
  labelList: String[] = []
  url1 = "https://api.discogs.com/database/search?genre=";
  url2 = "&year=2017&token=nJHdKuWuygRtNWkLVpISAUzTXcccdzAJyXpwzSMj";
  score = 0
  constructor(private _http: Http) { 
    this.questions = [
      "Which artist released fill_album ?", "Which album did fill_art released?",
      "Which label was fill_album released by?"
    ];
  }

  populateData(genre) {
    //get api data
    this._http.get(this.url1+genre+this.url2).map(res => res.json()).subscribe((data) => {
      this.data.push(data.results);
      for(let i=0; i<data.results.length; i++) {
        let artist = data.results[i].title.split("-")[0].trim()
        let album = data.results[i].title.split("-")[1].trim()
        let year = data.results[i].year
        let label = data.results[i].label[0]
        this.album_info.push({artist: artist, album: album, year: year, label: label})
        if (this.labelList.indexOf(this.album_info[i].label)==-1){
          this.labelList.push(this.album_info[i].label)
          this.artistList.push(this.album_info[i].artist)
          this.albumList.push(this.album_info[i].album) 
        }
      }
      this.album_info = [];
      for(let i=0; i<10; i++) {
        let qRand = Math.floor(Math.random() * 3);
        let albRand = Math.floor(Math.random() * (i+2)) 
        let currentAlb = String(this.albumList[albRand])
        let currentArt = String(this.artistList[albRand])
        let albArr = [];
        let kArr = [];
        let new_artoptions = [];
        let new_laboptions = [];
        let new_alboptions = [];
        //selecting random album info to populate filler option
        var j = 0
        while (j < 3) {
          let num = Math.floor(Math.random() * 20)
          console.log(num+"trying to push this number to albArr");
          if (num != albRand){
            albArr.push(num)
            console.log("pushing this to albArr"+num+"this is albArr"+albArr);
            j++
          } 
        }
        //unshuffled Artist options
        let artoptions = [
          this.artistList[albRand],
          this.artistList[albArr[0]], 
          this.artistList[albArr[1]], 
          this.artistList[albArr[2]] 
        ]
        //creating shuffled Artist options
        var a = 4
        while(a>0) 
        {
          let num2 = Math.floor(Math.random() * a)
          new_artoptions.push(artoptions[num2])
          artoptions.splice(num2, 1)
          a--
        }
        //unshuffled Label options
        let laboptions = [
          this.labelList[albRand],
          this.labelList[albArr[0]], 
          this.labelList[albArr[1]], 
          this.labelList[albArr[2]] 
        ]

        ///creating shuffled Artist options
        var b = 4
        while(b > 0) 
        {
          let num3 = Math.floor(Math.random() * b)
          new_laboptions.push(laboptions[num3])
          laboptions.splice(num3, 1)
          b--
        }
  
        //unshuffled Album name options
        console.log(
          this.albumList[albRand],
          this.albumList[albArr[0]], 
          this.albumList[albArr[1]], 
          this.albumList[albArr[2]]
        )
        let alboptions = [
          this.albumList[albRand],
          this.albumList[albArr[0]], 
          this.albumList[albArr[1]], 
          this.albumList[albArr[2]] 
        ]

        ///creating shuffled Album name options
        var c = 4
        while(c > 0) 
        {
          let num4 = Math.floor(Math.random() * c)
          new_alboptions.push(alboptions[num4])
          alboptions.splice(num4, 1)
          c--
        }

        //depending on question type, insert question object
        if(qRand == 0){ 
          let questionDict = {
            'question':this.questions[qRand].replace("fill_album", currentAlb),
            'options': new_artoptions,
            'answer': this.artistList[albRand]
            }
          this.actualQuestions.push(questionDict)
        }
        else if (qRand == 1){
          let questionDict = {
            'question':this.questions[qRand].replace("fill_art", currentArt),
            'options': new_alboptions,
            'answer': this.albumList[albRand]
            }
          this.actualQuestions.push(questionDict)
        }
        else if(qRand == 2){ 
          let questionDict = {
            'question':this.questions[qRand].replace("fill_album", currentAlb),
            'options': new_laboptions,
            'answer': this.labelList[albRand]
            }
          this.actualQuestions.push(questionDict)
        }
      }
    })
  }
  apiGenre(genre) {
    this.populateData(genre);
    console.log(this.actualQuestions);
  }
  getUsers() {
    this._http.get('/users').subscribe(
      tasks => {this.dataObserver.next(tasks.json()); console.log(tasks.json())},
      errorResponse => console.log(errorResponse)
    );
  }
  verifyUser(verifyUser) {
    return this._http.post('/user', verifyUser).subscribe((res)=> res.json());
   }
  createUser(user: User) { 
    this._http.post('/users', user).subscribe(
      (response) => {
        console.log("User created");
      },
      errorResponse => console.log(errorResponse)
    );
  }

}
