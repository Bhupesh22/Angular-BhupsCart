import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BhupsCart';

  loginuser:boolean = false;
  loginadmin : boolean = false;;
  adminemail;
  useremail;
  username;
  
  ngOnInit(){
    let check = sessionStorage.getItem('email');
    if(check && check == "admin@gmail.com"){
      this.router.navigate(['admin']);
    }
    else if(check && check == "bhupesh@gmail.com"){
      this.router.navigate(['product']);
    }else{
      this.router.navigate(['home']);
    }
  }
  constructor(private router: Router){}

  ngDoCheck(){
    if(sessionStorage.getItem('email')){
      this.username = sessionStorage.getItem('email');
      if(this.username == 'admin@gmail.com'){
        this.loginadmin = true;
      }else{
        this.loginuser = true;
      }
    }else{
      this.loginadmin = false;
      this.loginuser = false;
    }
  }

  logOff(){
    sessionStorage.clear();
    this.loginadmin = false;
    this.loginuser = false;
    this.router.navigate(['home']);
    this.username = '';
  }
}
