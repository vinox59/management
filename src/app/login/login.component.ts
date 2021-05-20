import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredential: any = [];
  isSuccess: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUserDetailFromStorage();
  }

  getUserDetailFromStorage() {
    let userInfo = sessionStorage.getItem('userDetail');
    this.userCredential = JSON.parse(userInfo);

  }

  getUserDetails(val) {
    let filterData = this.userCredential.find(credential => {
      return (val.username === credential.username && val.password === credential.password) 
    });
    
    if(filterData) {
      this.router.navigate(['/home']);
      
    } else {
      this.isSuccess = true;
    }
  }

}
