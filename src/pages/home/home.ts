import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FieldPage } from '../field/field';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage { 

  @ViewChild('fieldName') fieldName;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  //Metod för att kontrollera att det går att skapa en ny fotbollsplan.

  createField(fieldName) {

    let field = new FieldPage(this.navCtrl, this.navParams);

    field.setName(this.fieldName.value);

    console.log(field.getName(), field.getVisitorAmount());

  }

  //Metod som visar en "sida" tillhörande en fotbollsplan

showField(){

this.navCtrl.push(FieldPage);

}


}
