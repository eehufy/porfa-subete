import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscriber } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';


@Component({
  selector: 'app-veralumnos',
  templateUrl: './veralumnos.page.html',
  styleUrls: ['./veralumnos.page.scss'],
})
export class VeralumnosPage implements OnInit {

  token = localStorage.getItem("token");   
  users :any= []
  
  constructor( public http: HttpClient, private router:Router ) { }

  ngOnInit() {
  this.getUsers().subscribe(res => {
    console.log("Res",res)
    this.users = res;
  })
  }

  getUsers(){
    return this.http
    .get('assets/server/dlatos.json')
    .pipe(
      map((res:any)=>{
      return res.alumnos;})
      )
  }

}
