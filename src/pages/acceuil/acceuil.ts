import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth : AngularFireAuth,
              private toast : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
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

}
