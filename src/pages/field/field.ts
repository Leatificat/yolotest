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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.visitorAmount = "Okänd";

  }

  setName(newName) {

    let name = newName;

    if(name == null || name == undefined || name.length == 0){

      this.fieldName = "Namnlös";

    } else {

      this.fieldName = newName;

    }
    

  }

  getName() {

    return this.fieldName;

  }

  setVisitorAmount() {

    let noiseLevel = Math.floor(Math.random() * 3) + 1;

    switch (noiseLevel) {

      case 1: this.visitorAmount = "Låg"; document.getElementById("visitorBtn").style.backgroundColor = "green"; break;

      case 2: this.visitorAmount = "Mellan"; document.getElementById("visitorBtn").style.backgroundColor = "yellow"; break;

      case 3: this.visitorAmount = "Hög"; document.getElementById("visitorBtn").style.backgroundColor = "red"; break;

    }

  }

  getVisitorAmount() {
    return this.visitorAmount;
  }

  ionViewDidLoad() {

    let name = this.navParams.get("name");

    this.fieldName = name;

  }

}
