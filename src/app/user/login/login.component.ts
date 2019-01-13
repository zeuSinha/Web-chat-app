import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(
    private data: DataService,
    private router: Router,
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }

  public login() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.data.logIn(data).subscribe(
      res => {
        console.log(res.data);

        this.cookie.set('authToken', res.data.authToken);
        this.cookie.set('reciverName', res.data.userDetails.firstName + ' ' + res.data.userDetails.lastName);
        this.cookie.set('reciverId', res.data.userDetails.userId);

        this.data.setUserDataInLocalStorage(res.data.userDetails);
        this.router.navigate(['/chat']);
      }
    );
  }

}
