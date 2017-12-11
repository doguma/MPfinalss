import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {

  s;
  friends: object[] = [];

  constructor(public navCtrl: NavController, public af: AngularFireDatabase, private alertController: AlertController) {
    this.s = this.af.list('/tasks').subscribe( data =>{
      this.friends = data;
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
                  this.af.list('/tasks').push({ 
                    name: data.name, 
                    phone_number: data.phoneNumber, 
                    address: data.address
                  })
              }
            }]
        });
        alert.present();
      }



      deleteItem(key){

       this.af.list(`/tasks/`).remove(key);
           }

}
