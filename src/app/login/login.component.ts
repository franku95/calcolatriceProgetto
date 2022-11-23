import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  username: any;
  password: any;
  controllo: boolean = false;
  firstNumber: number = 0;
  secondNumber: number = 0;
  risultato: number = 0;
  
  invia(){
    if(this.username == "admin" && this.password == "admin"){
      this.controllo = true;
    }
    else{
      window.alert("Login errato");
    }
  }

  somma(){
    this.risultato = this.firstNumber + this.secondNumber;
  }

  sottrazione(){
    this.risultato = this.firstNumber - this.secondNumber;
  }

  moltiplicazione(){
    this.risultato = this.firstNumber * this.secondNumber;
  }

  divisione(){
    this.risultato = this.firstNumber / this.secondNumber;
  }
}
