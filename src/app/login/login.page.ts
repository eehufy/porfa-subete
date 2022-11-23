import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
}) 
export class LoginPage implements OnInit {
  mensaje : String;
  token ='LocalStorage';

  constructor(
    private router: Router,
    private storage: Storage
  ){}

  ngOnInit() {
    localStorage.clear()
  }


  async login(nom:HTMLInputElement, cont:HTMLInputElement){
    localStorage.setItem('token',this.token)
    if(nom.value == ""){
      this.mensaje='falta el nombre';
    }
    else if(cont.value == ""){
      this.mensaje = 'ingrese contraseña'
    }
    else if(cont.value != "1234"){
      this.mensaje = 'contraseña incorrecta'
    }
    else{
      this.router.navigate(["/home"]);
  }
  }
}