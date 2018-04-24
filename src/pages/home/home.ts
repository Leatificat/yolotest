import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FieldPage } from '../field/field';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('fieldName') fieldName;
  @ViewChild('searchValue') searchText;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {



  }

  list = new Array();


  //Metod för att kontrollera att det går att skapa en ny fotbollsplan.

  createField() {

    let newName = this.fieldName.value;

    let field = new FieldPage(this.navCtrl, this.navParams);

    field.setName(newName);

    this.list.push(field);

    this.addList(newName);

    console.log(field.getName(), field.getVisitorAmount());



  }



  getField() {

    let searchText = this.searchText.value;
    let field;
    let fieldName;
    let fieldData;
    let listLength = this.list.length;


    for (let i = 0; i < listLength; i++) {

      field = this.list[i];
      fieldName = field.getName();

      if (fieldName.toLowerCase() == searchText.toLowerCase()) {

        fieldData = {

          name: fieldName,

        }

        this.navCtrl.push(FieldPage, fieldData);

      }

    }

  }

  addList(fieldName) {

    let list = document.getElementById("fieldList");

    let listItem = document.createElement("p");

    let itemText = document.createTextNode(fieldName);

    listItem.appendChild(itemText);

    list.appendChild(listItem);

  }


}









