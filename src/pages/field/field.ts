import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})
export class FieldPage {

  private fieldName: string;
  private visitorAmount: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, name: string) {

    this.fieldName = name;

  }

  getDetails(){
    
    console.log(this.fieldName, );

  }





  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FieldPage');
  }



}
