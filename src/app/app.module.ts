import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EditMembersPage } from '../pages/edit-members/edit-members';
import { FriendsPage } from '../pages/friends/friends';
import { HonorCodePage } from '../pages/honor-code/honor-code';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: "AIzaSyBU7eBhOAiJroOdREgEFl9QNnNCgf7O_-g",
  authDomain: "mpfinalss.firebaseapp.com",
  databaseURL: "https://mpfinalss.firebaseio.com",
  projectId: "mpfinalss",
  storageBucket: "mpfinalss.appspot.com",
  messagingSenderId: "746464662393"
};


@NgModule({
  declarations: [
    MyApp,
    EditMembersPage,
    FriendsPage,
    HonorCodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditMembersPage,
    FriendsPage,
    HonorCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}