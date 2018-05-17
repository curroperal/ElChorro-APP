import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public isLogin: boolean;
	public userName: string;
	public userEmail: string;
  constructor(
  	public authService: AuthService,
  	public router: Router
  ) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe( auth =>{
  		if (auth) {
  			this.isLogin = true;
  			this.userName = auth.displayName;
  			this.userEmail = auth.email;
  		} else {
  			this.isLogin = false;
  		}
  	});
  }

  onClickLogout(){
  	this.authService.logout();
  }

}
