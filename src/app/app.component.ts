import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first';
  state: any = [];
  city: any = [];
  teams: string[] = ["england", "india", "pakistan"];
  players: string[] = [];
  indplayers: string[] = ["dhoni", "kohli", "virat"];
  englandplayers: string[] = ["sathish", "shravan", "lakshmi"];
  pakiplaayers: string[] = ["srikanth", "naresh", "suresh"];
  constructor(private _http: AuthService) { }
  ngOnInit(): void {
     this._http.states().subscribe(data=>{
      console.log(data);
this.state = data;
    })
  }
  onchange(state: any) {
    // console.log(state.target.value)
    this._http.cities().subscribe((data: any)=>{
    this.city = data;
    });
  }
  updateplayers(teamname: any) {
    switch (teamname.target.value) {
      case 'england':
        this.players = this.englandplayers;
        break;
      case 'india':
        this.players = this.indplayers;
        break;
      case 'pakistan':
        this.players = this.pakiplaayers;
        break;
      default:
        this.players = [];
        break;
    }
  }
}
