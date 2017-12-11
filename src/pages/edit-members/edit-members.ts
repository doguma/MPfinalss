import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-edit-members',
  templateUrl: 'edit-members.html'
})
export class EditMembersPage {

  s;
  public tasks: Array<any>;
  public tasklist: Array<any>;

  name: string = '';

  constructor(public navCtrl: NavController, private alertController: AlertController, public db: AngularFireDatabase) {

    this.s = this.db.list('/friends').subscribe(data => {
      this.tasks = data;
      this.tasklist = data;
    })
  }

  addItem() {
    let newTasks: Array<any> = [];
    let alert = this.alertController.create({
      title: "Add a Member",
      message: "Enter the member's information",
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
        {
          name: 'phoneNumber',
          placeholder: 'phone number'
        },
        {
          name: 'address',
          placeholder: 'address'
        }
      ],
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ADD',
          handler: data => {
            this.db.list('/friends').push({
              name: data.name,
              phone_number: data.phoneNumber,
              address: data.address
            })
          }
        }]
    });
    alert.present();
  }

  removeTask(key) {
    this.db.list(`/friends/`).remove(key);
  }

  searchQuery: string = '';

  initializeTasks() {
    this.tasks = this.tasklist;
  }

  getTasks(searchbar) {
    this.initializeTasks();

    var q = searchbar.srcElement.value;


    if (!q) {
      return;
    }

    this.tasks = this.tasks.filter((v) => {
      if (v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });


  }
}