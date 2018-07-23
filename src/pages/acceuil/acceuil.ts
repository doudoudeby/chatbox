import { Component } from '@angular/core';
import {  NavController, NavParams , ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
//import { Profil } from '../../models/profil';
import { AngularFireDatabase , AngularFireObject } from 'angularfire2/database';
//import { Observable } from 'rxjs';
import { Profil } from '../../models/profil';
import { Observable } from 'rxjs';

/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})
export class AcceuilPage {

  profileData: AngularFireObject<Profil>;
  itemRef : Observable<any>;
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth : AngularFireAuth,
              private toast : ToastController, private afDatabase : AngularFireDatabase) {
                this.getDataProfile();
             
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
    this.afAuth.authState.take(1).subscribe(data => {

      if(data && data.email && data.uid){
        this.toast.create({
          message: `welcome to APP_NAME , ${data.email}`,
          duration: 3000
        }).present();

       // this.profileData =  this.afDatabase.object(`profil/${data.uid}`)

    

      }else{
        this.toast.create({
          message: 'Could not authentificate',
          duration: 3000
        }).present();
      }
   

      console.log(data)
    })
  }




  getDataProfile(){
    this.afDatabase.list('profil/').valueChanges().subscribe{
      data => {
        console.log(data)
        this.items = data
      }
    }

  }



}
