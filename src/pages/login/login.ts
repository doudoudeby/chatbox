import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import { AngularFireAuth } from 'angularfire2/auth'
import { AcceuilPage } from '../acceuil/acceuil';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private afAuth : AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async loginUser(user : User){
    try{

     const resul = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

      console.log(resul)

      if(resul){
        this.navCtrl.setRoot(AcceuilPage);
      }

    }catch(e){
      console.log(e);
    }
  }

}
