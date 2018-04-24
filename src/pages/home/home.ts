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

  list = new Array();

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
      message: "Fotbollsplan: \"" + fieldName + "\" skapad. \n Belastningsnivå: " + "\"" + visitorAmount + "\"",
      duration: 3000
    });
    toast.present();
  }

  showField() {
    this.navCtrl.push(FieldPage);
  }

  skapa() {

    let fieldName;

    for (var i = 0; i < 5; i++) {

      switch (i) {

        case 0: fieldName = "första planen"; break;
        case 1: fieldName = "andra planen"; break;
        case 2: fieldName = "tredje planen"; break;
        case 3: fieldName = "fjärde planen"; break;
        case 4: fieldName = "femte planen"; break;

      }



      let field = new FieldPage(this.navCtrl, this.navParams);
      field.setName(fieldName);
      console.log(field.getName());

      this.list.push(field);

    }

  }

  

}

}




