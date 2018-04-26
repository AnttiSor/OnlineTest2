import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../user";
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

 
 async login(user : User) {
   try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    
       if(result) {     
    this.navCtrl.push('MenuPage')
    }
  }
 catch (e) {
    
    this.navCtrl.push('LoginPage')
    
    
  }
  
  }

  
  register() {
    this.navCtrl.push('RegisterPage')
  }

  loginwo() {
    this.navCtrl.setRoot('MenuPage')
  }
  
  }
