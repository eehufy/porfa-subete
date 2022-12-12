import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from 'src/storage.service';
import { CapiService } from 'src/capi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
}) 
export class LoginPage implements OnInit {
  mensaje : String;
  lista = []
  nombre: String;

  constructor(
    private router: Router,
    private Capi : CapiService,
    private storage :  StorageService
  ){}
  ngOnInit() {
    this.Capi.getUsers();
    this.lista = this.Capi.listado;
    console.log(this.lista);
    this.storage.init();
  }
 
  async checkear(nom: HTMLInputElement, cont: HTMLInputElement)
  {
    this.nombre = nom.value;
    //console.log(this.apirest.listado.find(({username}) => username === this.nombre));
    this.lista = this.Capi.listado.find(({UsuarioA}) => UsuarioA === this.nombre);
    //console.log(this.lista);
 

    if(nom.value == "")
    {
      this.mensaje = " Ingrese nombre de usuario";
    }
    else if(cont.value == "")
    {
      this.mensaje = " Por favor, ingrese su contraseña";
    }
    else if(!this.Capi.listado.find(({UsuarioA}) => UsuarioA === this.nombre)){
      this.mensaje = " Usuario no existe";
    }
    else if(cont.value != "1234"){
      this.mensaje = " Contraseña incorrecta";
    }
    else
    {
      this.storage.agregar('id', this.lista['id']);
      this.router.navigate(['/home', this.lista['id']]);
      nom.value = '';
      cont.value = '';
      this.mensaje = '';
    }

/**
    else if(cont.value != "1234"){
      this.mensaje = 'contraseña incorrecta'
    }*/

  }
}