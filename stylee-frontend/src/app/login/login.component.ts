import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../Service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authS: AuthenticationService, private router: Router) {

  }

  login(loginForm: NgForm) {

    this.authS.login(loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['/']); //it takes multiple sequence of routes
          console.log(this.authS.decodeAccessToken());
          // this.authS.decodeAccessToken().userType === "Admin" ? this.router.navigate(['/dashboard']) :
          //   this.router.navigate(['/'])
        },

        error:
          (err) => {
            console.log(err.message);
          }
      }
    )
    console
      .info(
        "Logged in successfully!"
      )

  }
}
