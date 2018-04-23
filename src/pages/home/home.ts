import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FieldPage } from '../field/field';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage { 

  @ViewChild('fieldName') fieldName;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  }

  //Metod för att kontrollera att det går att skapa en ny fotbollsplan.

  createField(fieldName) {

    let newName = this.fieldName.value;

    let field = new FieldPage(this.navCtrl, this.navParams);

    field.setName(newName);

    console.log(field.getName(), field.getVisitorAmount());

    this.showConfirmationToast(field.getName(), field.getVisitorAmount());

  }

  showConfirmationToast(fieldName, visitorAmount) {
    let toast = this.toastCtrl.create({
      message: "Fotbollsplan " + fieldName + " skapad. " + visitorAmount,
      duration: 3000
    });
    toast.present();
  }

  showField(){
    this.navCtrl.push(FieldPage);
  }



}
