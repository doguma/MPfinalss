import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-edit-members',
  templateUrl: 'edit-members.html'
})
export class EditMembersPage {

  tasks: Array<any> = [];

  constructor(public navCtrl: NavController, private alertController: AlertController) {

    this.tasks = [
      { name: 'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관' },
      { name: 'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관' },
      { name: 'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관' },
      { name: 'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관' }
    ];

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
              this.tasks.push({ name: data.name, phone_number: data.phoneNumber, address: data.address})
          }
        }]
    });
    alert.present();



  }


}
