import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import {AddTaskPage} from '../add-task/add-task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 tasks = [];
  ref = firebase.database().ref('tasks/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
      this.tasks = [];
      this.tasks = snapshotToArray(resp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addTask() {
    this.navCtrl.push(AddTaskPage);
  }

     del(key) {

     console.log(key);
  }

}


export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
