import { Component } from '@angular/core';
import {  NavController, NavParams , ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


import { Profil } from '../../models/profil';
import { AcceuilPage } from '../acceuil/acceuil';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  profil = {} as Profil;


  constructor(public navCtrl: NavController, public navParams: NavParams , private afAuth : AngularFireAuth,
               private toast : ToastController , private afDatabase : AngularFireDatabase ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');

    this.afAuth.authState.subscribe(data => {

      if(data && data.email && data.uid){
        this.toast.create({
          message: `welcome to APP_NAME , ${data.email}`,
          duration: 3000
        }).present();
      }else{
        this.toast.create({
          message: 'Could not authentificate',
          duration: 3000
        }).present();
      }
   

      console.log(data)
    })
    
  }



  createProfil(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profil/${auth.uid}`).set(this.profil)
      .then(() => this.navCtrl.setRoot(AcceuilPage))  ;
    })
  }

  

}
