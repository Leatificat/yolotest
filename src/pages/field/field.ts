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


  //Konstruktor för skapande av fotbollsplanen

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.setVisitorAmount();

  }

  //Metod för att tilldela namn till fotbollsplanen.

  setName(newName) {

      this.fieldName = newName;
    

  }

  //Metod för att få namnet på en fotbollsplan.

  getName() {

    return this.fieldName;

  }

  //Metod för att sätta planens belastningsgrad.

  setVisitorAmount() {

    let noiseLevel = Math.floor(Math.random() * 3) + 1;

    if (noiseLevel == 1) {
      this.visitorAmount = 'Belastning: låg';
    }
    if (noiseLevel == 2) {
      this.visitorAmount = 'Belastning: medel';
    }
    if (noiseLevel == 3) {
      this.visitorAmount = 'Belastning: hög';
    }

  }

  //Metod för att få planens belastningsgrad.

  getVisitorAmount() {
    return this.visitorAmount;
  }

}
