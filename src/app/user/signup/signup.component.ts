import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName: String;
  lastName: String;
  emailId: String;
  mobileNumber: Number;
  password: String;
  apiKey: String;

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public signup() {
    const userDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.emailId,
      mobileNumber: this.mobileNumber,
      password: this.password,
      apiKey: this.apiKey
    };
    console.log(userDetails);
    this.data.signUp(userDetails).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
