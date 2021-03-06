import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';



import * as firebase from 'firebase';
const config = {
 apiKey: "AIzaSyA7a90BBSjvZNlOIrENmhEapZHJiC46I-k",
    authDomain: "tasks-71ea1.firebaseapp.com",
    databaseURL: "https://tasks-71ea1.firebaseio.com",
    projectId: "tasks-71ea1",
    storageBucket: "",
 
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
