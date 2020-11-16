import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private router:Router) {
    this.loginForm=new FormGroup({
      emailid:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    });
   }

   get emailid(){
     return this.loginForm.get('emailid');
   }

   get password(){
     return this.loginForm.get('password');
   }

   doLogin(){
    if(this.emailid.value=="admin@gmail.com" && this.password.value=="admin") {
        this.router.navigate(['admin']);
        sessionStorage.setItem('email',this.emailid.value);
    }
    else if(this.emailid.value=="bhupesh@gmail.com" && this.password.value=="1234"){
        this.router.navigate(['product']);
        sessionStorage.setItem('email',this.emailid.value);
    }

   }

  ngOnInit(): void {
  }

}
