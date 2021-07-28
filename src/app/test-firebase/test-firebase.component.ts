import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {  AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-test-firebase',
  templateUrl: './test-firebase.component.html',
  styleUrls: ['./test-firebase.component.css']
})
export class TestFirebaseComponent implements OnInit {


  title ='Nom des stagiaires (Firebase)';
  description = 'Active';

  itemValue ='';
  items: Observable<any[]> | undefined;

  constructor(public db:AngularFireDatabase) { 
    this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.db.list('items').push({content: this.itemValue});
    this.itemValue='';
  }
}
