import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
  	public afAuth: AngularFireAuth
  ) { }

  registerUser(email: string, pass: string) {
  	return new Promise((resolve,reject) => {
  		this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
  		.then( userData => resolve(userData),
  		err => reject (err));
  	});
  }

  getAuth(){
  	return this.afAuth.authState.map ( auth => auth);
  }


  loginUser(email: string, pass: string) {
  	return new Promise((resolve,reject) => {
  		this.afAuth.auth.signInWithEmailAndPassword(email, pass)
  		.then( userData => resolve(userData),
  		err => reject (err));
  	});
  }

  logout(){
  	return this.afAuth.auth.signOut();
  }

}
