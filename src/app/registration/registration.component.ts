import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      dob: new FormControl(''),
      sex: new FormControl('')
    })
  }

  enrollData(value) {
    console.log(value)
  }

}
