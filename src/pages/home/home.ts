import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FieldPage } from '../field/field';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// I PRINCIP ALLTING JAG HAR GJORT HÄR ÄR OVIKTIGT FÖR PROJEKTET, BARA FÖR ATT TESTA FIELD.TS-FUNKTIONALITEN

export class HomePage {

  private listOfFields: Array<FieldPage> = []; 

  @ViewChild('fieldName') fieldName;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  createField(fieldName) {

    let field = new FieldPage(this.navCtrl, this.navParams, this.fieldName.value);

    console.log(field.getDetails());

    this.listOfFields.push(field);

  }

  getFieldFromList(){

   // Metod som ska hämta en fotbollsplan från listan, OVIKTIG FÖR PVT-PROJEKTET
    

  }



}
