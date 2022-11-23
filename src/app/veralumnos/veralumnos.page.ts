import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-veralumnos',
  templateUrl: './veralumnos.page.html',
  styleUrls: ['./veralumnos.page.scss'],
})
export class VeralumnosPage implements OnInit {

  token = localStorage.getItem("token");   
  characters = []

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    console.log("token: ", this.token)
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      console.log(res);
      this.characters = res.results;
    })
  }

}
