import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})
export class FieldPage {

  private fieldName: string; //Namnet på planen.
  private visitorAmount: string; //Antalet besökare beskrivet i som hög/medel/låg.
  private defaultName = 'Ej namngiven fotbollsplan'; //Om planen inte namnges kommer den att heta så.
  
  //Konstruktor för skapande av fotbollsplanen

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  //Metod för att tilldela namn till fotbollsplanen.
  
  setName(newName) {

    this.fieldName = newName;

    if(newName == null || newName == undefined || newName.length == 0 || newName == ''){

      this.fieldName = this.defaultName; 

    }

  }

  //Metod för att få namnet på en fotbollsplan.

  getName() {

    return this.fieldName;

  }

  //Metod för att få planens belastningsgrad.

  getVisitorAmount() {

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

}
