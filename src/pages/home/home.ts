import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Nom : string;
  Prenom : string;
  Username : string;
  password : string;

  user = {} as User;

 // items: Observable<any[]>;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
    //this.items = afDB.list('cuisines').valueChanges();
  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }


  async Register(user : User){
    try{
      const resul = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(resul);
    }catch(e){
      console.error(e);
    }
  }

  Login(){
    this.navCtrl.push(LoginPage);
  }


}


