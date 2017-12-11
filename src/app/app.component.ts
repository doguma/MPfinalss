import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FriendsPage } from '../pages/friends/friends';
import { HonorCodePage } from '../pages/honor-code/honor-code';


import { EditMembersPage } from '../pages/edit-members/edit-members';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = EditMembersPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToEditMembers(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EditMembersPage);
  }goToFriends(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FriendsPage);
  }goToHonorCode(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HonorCodePage);
  }
}
