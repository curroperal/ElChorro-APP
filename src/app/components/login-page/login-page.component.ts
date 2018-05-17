import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	public email: string;
	public password: string;
  constructor(
  	public authService: AuthService,
  	public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
	this.authService.loginUser(this.email, this.password)
  	.then( (res) => {
      this.router.navigate(['/']);
  		console.log('BIEN!!!');
  	}).catch( (err) => {
  		console.log(err);
  		this.router.navigate(['/login']);
  	});
  }

}
