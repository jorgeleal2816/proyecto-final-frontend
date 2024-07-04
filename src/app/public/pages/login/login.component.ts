import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login:any

  constructor(private userService: UserService, private router:  Router) {
    this.login = new FormGroup({
      mail: new FormControl( '', [] ),
      password: new FormControl( '', [] ),
    })
  }

  onSumbit() {
    if( this.login.valid ) {
      console.log(this.login.value)
      this.userService.login(this.login.value).subscribe((data) => {
        console.log(data)
        this.router.navigate(['/', 'home'])
      })
    }
 }
}
