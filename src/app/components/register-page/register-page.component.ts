import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
	public email: string;
	public password: string;
  constructor(
  	public authService: AuthService
  	) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
  	this.authService.registerUser(this.email, this.password)
  	.then( (res) => {
  		console.log('BIEN!!!');
  		console.log(res);
  	}).catch( (err) => {
  		console.log(err);
  	});
  }
}
