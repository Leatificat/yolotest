import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})
export class FieldPage {

  private fieldName: string;
  private visitorAmount: string;
  private defaultName = 'Ej namngiven fotbollsplan';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, name: string) {

    if (name == null || name == '' || name == undefined) {
      name = this.defaultName;
    }

    this.fieldName = name;

  }

  getDetails() {

    this.getActivity();

    console.log(this.fieldName, this.getActivity());

  }

  getName() {

    return this.fieldName;

  }

  setName(string: 'newName') {

    this.fieldName = 'newName';

  }

  getActivity() {

    let noiseLevel = Math.floor(Math.random() * 3) + 1;

    if(noiseLevel == 1){
      this.visitorAmount = 'Belastning: låg';
    }
    if(noiseLevel == 2){
      this.visitorAmount = 'Belastning: medel';
    }
    if(noiseLevel == 3){
      this.visitorAmount = 'Belastning: hög';
    }

    return this.visitorAmount;

  }









  ionViewDidLoad() {
    console.log('ionViewDidLoad FieldPage');
  }



}
