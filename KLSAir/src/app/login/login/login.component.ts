import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isDisabled = true;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  public navigateToRegistration() {
    this.router.navigate(['/registration'])
  }

  public resolved(captchaResponse: string) {
    console.log(`response: ${captchaResponse}`)
  }

}
