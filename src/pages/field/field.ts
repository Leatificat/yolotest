import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-field',
  providers: [],
  templateUrl: 'field.html',
})
export class FieldPage {

  fieldName: string; //Namnet på planen.
  visitorAmount: string; //Antalet besökare beskrivet i som hög/medel/låg.
  defaultName = "Namnlös plan"; //Om planen inte namnges kommer den att heta så.
  xPos: string; //koordinater för eventuell API?
  yPos: string; //koordinater för eventuell API?


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.visitorAmount = "Okänd";

  }

  setName(newName) {

      this.fieldName = newName;
    
  }

  getName() {

    if(this.fieldName == null || this.fieldName === undefined || this.fieldName.length === 0){

      this.fieldName = this.defaultName;

    } return this.fieldName;

  }

  setVisitorAmount() {

    let noiseLevel = Math.floor(Math.random() * 3) + 1;

    if (noiseLevel == 1) {
      this.visitorAmount = 'Låg';
    }
    if (noiseLevel == 2) {
      this.visitorAmount = 'Medel';
    }
    if (noiseLevel == 3) {
      this.visitorAmount = 'Hög';
    }

  }

  getVisitorAmount() {
    return this.visitorAmount;
  }

  getPosX(){

    return this.xPos;

  }

  getPosY(){

    return this.yPos;

  }

}
