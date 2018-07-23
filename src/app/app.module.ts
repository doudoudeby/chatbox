import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { ProfilPage } from '../pages/profil/profil';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';




const firebaseConfig = {
    apiKey: "AIzaSyCGuXfed_jqG4ytZT5vSqBGGtU15nngRbQ",
    authDomain: "chatbox-f1453.firebaseapp.com",
    databaseURL: "https://chatbox-f1453.firebaseio.com",
    projectId: "chatbox-f1453",
    storageBucket: "chatbox-f1453.appspot.com",
    messagingSenderId: "313242112548"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AcceuilPage,
    ProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AcceuilPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
